import React, { useState, useEffect } from 'react';
import FishCanvas from './components/FishCanvas';
import ContactSection from './components/ContactSection';
import { 
  Globe, Waves, Sparkles, ChevronDown, Mail, Share2
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    en: {
      nav: { about: "About", species: "Species", services: "Services", faq: "FAQ", contact: "Contact" },
      hero: {
        tag: "Master Aqua Breeder",
        title: "MD ABDULLAH",
        subtitle: "Pioneer in High-Grade Ornamental Fish & Sustainable Aquaculture",
        desc: "Specializing in purebred Halfmoon Bettas, Albino Guppy Strains, and Premium Exotic Aquatics. Combining genetic science with passion to produce healthy, vibrant aquatic life.",
        btnContact: "Get In Touch",
        btnGallery: "Explore Strains"
      },
      stats: [
        { label: "Pure Strains Developed", val: "50+" },
        { label: "Healthy Fishes Delivered", val: "10K+" },
        { label: "Years of Expertise", val: "7+" }
      ],
      about: {
        tag: "About The Breeder",
        title: "Dedicated to Aquatic Perfection",
        p1: "Founded by MD ABDULLAH, our breeding facility focuses on high-grade genetic traits, intense coloration, and disease-resistant aquatic lines.",
        p2: "We supply aquarium enthusiasts, retail stores, and commercial farms with top-tier ornamental fish varieties across the country."
      },
      species: {
        tag: "Exclusive Strains",
        title: "Featured Fish Strains",
        items: [
          { name: "Royal Blue Betta Splendens", desc: "Long flowing fins with iridescence and high aggression/vitality.", type: "Premium Betta" },
          { name: "Full Red Albino Guppy", desc: "Pure high-grade red pigmentation with stable genetics for breeding.", type: "Guppy Strain" },
          { name: "High-Fin Platinum Angel", desc: "Metallic pearl finish with graceful fin expansion for aquascapes.", type: "Cichlid Family" }
        ]
      },
      services: {
        tag: "Professional Expertise",
        title: "Services & Wholesale",
        items: [
          { title: "Purebred Supply", desc: "Wholesale & retail distribution of healthy, quarantined ornamental fish strains." },
          { title: "Aquaculture Consultancy", desc: "Expert guidance on water quality setup, disease prevention, and commercial breeding." },
          { title: "Custom Aquascaping", desc: "Bespoke aquarium design with natural biotope setup for homes and offices." }
        ]
      },
      faq: {
        tag: "Queries",
        title: "Frequently Asked Questions",
        items: [
          { q: "How do you ensure fish health during delivery?", a: "We use oxygen-packed insulated containers with temperature stabilization to ensure 100% live delivery guarantee." },
          { q: "Do you supply wholesale for retail shops?", a: "Yes, MD ABDULLAH provides bulk shipments for pet stores with guaranteed genetic purity." },
          { q: "Can I consult regarding Betta breeding issues?", a: "Absolutely! You can reach out via our contact form for personal consultation slots." }
        ]
      }
    },
    bn: {
      nav: { about: "সম্পর্কে", species: "প্রজাতি", services: "সেবাসমূহ", faq: "প্রশ্নাবলী", contact: "যোগাযোগ" },
      hero: {
        tag: "মাস্টার অ্যাকুয়া ব্রিডার",
        title: "মো: আব্দুল্লাহ",
        subtitle: "উন্নত জাতের রঙিন মাছ প্রজনন ও টেকসই অ্যাকুয়াকালচার উদ্ভাবক",
        desc: "বিশুদ্ধ জাতের হাফমুন বিটা, অ্যালবিনো গাপ্পি স্ট্রেন এবং প্রিমিয়াম এক্সোটিক মাছ প্রজনন ও বাজারজাতকরণে বিশ্বস্ত নাম।",
        btnContact: "যোগাযোগ করুন",
        btnGallery: "মাছের প্রজাতি দেখুন"
      },
      stats: [
        { label: "বিশুদ্ধ জাতের মাছ", val: "৫০+" },
        { label: "সফলভাবে সরবরাহকৃত", val: "১০,০০০+" },
        { label: "বছরের অভিজ্ঞতা", val: "৭+" }
      ],
      about: {
        tag: "ব্রিডার সম্পর্কে",
        title: "রঙিন মাছের গুণগত মানে আপোষহীন",
        p1: "মো: আব্দুল্লাহর তত্ত্বাবধানে আমাদের অ্যাকুয়াকালচার ফার্মে উন্নত জিনগত বৈশিষ্ট্য ও চোখধাঁধানো রঙের মাছ প্রজনন করা হয়।",
        p2: "আমরা সারা দেশে একোয়ারিয়াম শপ, পাইকারি বিক্রেতা এবং শখের অ্যাকুয়ারিস্টদের প্রিমিয়াম কোয়ালিটির মাছ সরবরাহ করে থাকি।"
      },
      species: {
        tag: "বিশেষ কালেকশন",
        title: "জনপ্রিয় মাছের স্ট্রেনসমূহ",
        items: [
          { name: "রয়েল ব্লু বিটা স্প্লেনডেন্স", desc: "দীর্ঘ আকর্ষণীয় পাখনা এবং উন্নত উজ্জ্বল কালার গ্যারান্টি।", type: "প্রিমিয়াম বিটা" },
          { name: "ফুল রেড অ্যালবিনো গাপ্পি", desc: "একটানা নিখুঁত লাল পিগমেন্টেশন সমৃদ্ধ ব্রিডার কোয়ালিটি মাছ।", type: "গাপ্পি স্ট্রেন" },
          { name: "হাই-ফিন প্ল্যাটিনাম এঞ্জেল", desc: "অ্যাকুয়াস্কেপিং অ্যাকোয়ারিয়ামের জন্য চমৎকার সিলভার প্ল্যাটিনাম ভ্যারাইটি।", type: "এঞ্জেল প্রজাতি" }
        ]
      },
      services: {
        tag: "প্রফেশনাল সার্ভিস",
        title: "আমাদের সেবাসমূহ",
        items: [
          { title: "পাইকারি ও খুচরা মাছ সরবরাহ", desc: "কোয়ারেন্টাইন সম্পন্ন সুস্থ ও সবল রঙিন মাছের নির্ভরযোগ্য সরবরাহ।" },
          { title: "ফার্ম ও ব্রিডিং কনসালটেন্সি", desc: "পানির প্যারামিটার নিয়ন্ত্রণ, প্রজনন সমস্যা সমাধান ও ফার্ম সেটআপ গাইড।" },
          { title: "কাস্টম অ্যাকুয়াস্কেপ ডিজাইন", desc: "বাসা বা অফিসের জন্য ন্যাচারাল প্ল্যান্টেড ও বায়োটোপ অ্যাকোয়ারিয়াম সেটআপ।" }
        ]
      },
      faq: {
        tag: "জিজ্ঞাসা",
        title: "সাধারণ জিজ্ঞাসাসমূহ",
        items: [
          { q: "ডেলিভারির সময় মাছের সুরক্ষা কীভাবে নিশ্চিত করেন?", a: "আমরা বিশেষ থার্মাল বক্স এবং মেডিকেল অক্সিজেনে প্যাক করে ১০০% নিরাপদ ডেলিভারি নিশ্চিত করি।" },
          { q: "একোয়ারিয়াম শপের জন্য পাইকারি দেওয়া হয় কি?", a: "হ্যাঁ, মো: আব্দুল্লাহ দেশব্যাপী পাইকারি দামে গ্যারান্টিযুক্ত অ্যাকোয়ারিয়াম মাছ সরবরাহ করে থাকেন।" },
          { q: "বিটা মাছের প্রজনন সংক্রান্ত পরামর্শ পাওয়া যাবে কি?", a: "অবশ্যই! ফরমের মাধ্যমে বুকিং দিয়ে সরাসরি পরামর্শ গ্রহণ করতে পারেন।" }
        ]
      }
    }
  }[lang];

  return (
    <div className="relative min-h-screen text-white select-none">
      <FishCanvas mousePosition={mousePosition} />

      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wider text-cyan-400">MD ABDULLAH</h1>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">{content.nav.about}</a>
          <a href="#species" className="hover:text-cyan-400 transition">{content.nav.species}</a>
          <a href="#services" className="hover:text-cyan-400 transition">{content.nav.services}</a>
          <a href="#faq" className="hover:text-cyan-400 transition">{content.nav.faq}</a>
          <a href="#contact" className="hover:text-cyan-400 transition">{content.nav.contact}</a>
        </div>

        <button 
          onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
          className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:bg-white/10 transition cursor-pointer"
        >
          <Globe className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold">{lang === 'en' ? 'বাংলা' : 'English'}</span>
        </button>
      </nav>

      <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
        <div className="max-w-2xl">
          <span className="text-cyan-400 font-semibold tracking-wide uppercase text-xs md:text-sm flex items-center gap-2 mb-2">
            <Waves className="w-4 h-4" /> {content.hero.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-cyan-200/90 mb-4 font-light">
            {content.hero.subtitle}
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
            {content.hero.desc}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition shadow-lg shadow-cyan-500/20">
              {content.hero.btnContact}
            </a>
            <a href="#species" className="px-6 py-3 glass hover:bg-white/10 font-bold rounded-xl transition">
              {content.hero.btnGallery}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-16 max-w-xl">
          {content.stats.map((st, i) => (
            <div key={i} className="glass p-4 rounded-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-400">{st.val}</h3>
              <p className="text-xs text-gray-400 mt-1">{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.about.tag}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{content.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>{content.about.p1}</p>
            <p>{content.about.p2}</p>
          </div>
        </div>
      </section>

      <section id="species" className="py-20 px-6 max-w-6xl mx-auto">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.species.tag}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">{content.species.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.species.items.map((sp, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl hover:border-cyan-500/50 transition">
              <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">{sp.type}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{sp.name}</h3>
              <p className="text-gray-400 text-sm">{sp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.services.tag}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">{content.services.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.services.items.map((srv, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{srv.title}</h3>
              <p className="text-gray-400 text-sm">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.faq.tag}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{content.faq.title}</h2>
        <div className="space-y-4">
          {content.faq.items.map((item, idx) => (
            <div key={idx} className="glass rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 font-semibold flex justify-between items-center cursor-pointer hover:bg-white/5"
              >
                <span>{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-gray-400 text-sm border-t border-white/5">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <ContactSection lang={lang} />

      {/* Fixed Footer */}
<footer className="fixed bottom-0 left-0 w-full z-50 border-t border-white/10 py-4 px-6 text-center text-gray-500 text-sm backdrop-blur-md bg-black/60">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
    <p>© {new Date().getFullYear()} MD ABDULLAH. All Rights Reserved.</p> <p>Design & Developed by <a href='https://mhidris.vercel.app'><b><i className=" font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MH IDRIS</i></b></a></p>
    <div className="flex gap-4 text-gray-400">
      <a href="#" className="hover:text-cyan-400"><Share2 className="w-5 h-5" /></a>
      <a href="mailto:contact@mdabdullah.com" className="hover:text-cyan-400"><Mail className="w-5 h-5" /></a>
    </div>
  </div>
</footer>
    </div>
  );
}