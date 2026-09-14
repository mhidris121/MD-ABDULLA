// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, useAnimations, Environment, Float } from '@react-three/drei';

// function BettaFish({ mousePosition }) {
//   const group = useRef();
//   // public/betta_splendens.glb থেকে 3D মডেল এবং অ্যানিমেশন লোড
//   const { scene, animations } = useGLTF('/betta_splendens.glb');
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     // মডেলটির প্রথম অ্যানিমেশনটি প্লে করা
//     if (actions && Object.keys(actions).length > 0) {
//       const firstAction = actions[Object.keys(actions)[0]];
//       firstAction.play();
//     }
//   }, [actions]);

//   {/*useFrame((state) => {
//     if (group.current) {
//       // মাউসের সাথে হালকা ইন্টারেক্টিভ রোটেশন (আরও স্মুথ করা হয়েছে)
//       group.current.rotation.y = (mousePosition.x * Math.PI) * 0.1;
//       group.current.rotation.x = -(mousePosition.y * Math.PI) * 0.05;
//     }
//   }); */}

//   return (
//     <group ref={group} dispose={null}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// export default function FishCanvas({ mousePosition }) {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
//       {/* 
//          পরিবর্তন ১: ক্যামেরাকে দূরে সরানো হয়েছে (position z: 5 -> 10) 
//          FOV কে কিছুটা কমানো হয়েছে (fov: 45 -> 40)
//       */}
//       <Canvas camera={{ position: [20, 0, 20], fov: 8 }} dpr={[1, 2]}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00ffff" />
//         <pointLight position={[-10, -10, -5]} intensity={1.5} color="#ff007f" />
        
//         {/* 
//            পরিবর্তন ২: মডেলের স্কেল এবং পজিশন ঠিক করা হয়েছে।
//            পজিশন y-axis এ কিছুটা নিচে নামানো হয়েছে (0 -> -1)।
//            স্কেল অনেক কমানো হয়েছে ([1.8, 1.8, 1.8] -> [0.5, 0.5, 0.5])
//         */}
//         <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8} position={[0, 0, 0]}>
//           <group scale={[0.5, 0.5, 0.5]}> 
//             <BettaFish mousePosition={mousePosition} />
//           </group>
//         </Float>

//         <Environment preset="night" />
//       </Canvas>
//     </div>
//   );
// }

// // Pre-load the GLB model
// useGLTF.preload('/betta_splendens.glb');


import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Float } from '@react-three/drei';

function BettaFish() {
  const group = useRef();
  const { scene, animations } = useGLTF('/betta_splendens.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction?.play();
    }
  }, [actions]);

  return (
    /* 
      - rotation.y কে -Math.PI / 2 (বা আপনার মডেলের সুবিধামতো অ্যাঙ্গেল) সেট করে 
        মাছের ডান চোখ পুরোপুরি আড়াল করা হয়েছে এবং বাম দিক দৃশ্যমান রাখা হয়েছে।
      - মাউসের সাথে কোনো রোটেশন হবে না, পজিশন একদম ফিক্সড থাকবে।
    */
    <group ref={group} dispose={null} rotation={[0.1, -Math.PI / 10, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function FishCanvas() {
  // স্ক্রিন সাইজ অনুযায়ী FOV এর স্টেট (ডিফল্ট ৮)
  const [fov, setFov] = React.useState(8);

  React.useEffect(() => {
    const handleResize = () => {
      // স্ক্রিনের সাইজ ৭৬৮ পিক্সেলের কম হলে (মোবাইল/ট্যাবলেট) FOV ১৫ হবে, অন্যথায় ৮
      if (window.innerWidth < 768) {
        setFov(15);
      } else {
        setFov(8);
      }
    };

    // প্রথমবার পেজ লোড হলে চেক করবে
    handleResize();

    // ব্রাউজার রিসাইজ করলে রেসপন্সিভলি চেঞ্জ হবে
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      {/* fov প্রপসে ডায়নামিক fov স্টেট বসানো হয়েছে */}
      <Canvas camera={{ position: [20, 0, 20], fov: fov }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00ffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#ff007f" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[0, -0.5, 0]}>
          <group scale={[0.5, 0.5, 0.5]}> 
            <BettaFish />
          </group>
        </Float>

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/betta_splendens.glb');