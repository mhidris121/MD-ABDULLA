import React, { useState, useEffect } from 'react';
import FishCanvas from './components/FishCanvas';
import ContactSection from './components/ContactSection';
import { 
  Globe, Waves, Sparkles, ChevronDown, Mail, Share2, MessageCircle, UserCheck, ExternalLink
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

  // SEO Dynamic Title & Meta Effect
  useEffect(() => {
    document.title = lang === 'en' 
      ? "MD ABDULLAH | Master Aqua Breeder & Premium Ornamental Fish"
      : "মো: আব্দুল্লাহ | প্রিমিয়াম রঙিন মাছ প্রজনন ও অ্যাকুয়াকালচার";
  }, [lang]);

  const whatsappNumber = "01735485553"; // এখানে মূল হোয়াটসঅ্যাপ নম্বর বসাবেন

  const content = {
    en: {
      nav: { story: "Entrepreneur Story", species: "Species", services: "Services", faq: "FAQ", contact: "Contact" },
      hero: {
        tag: "Master Aqua Breeder & Entrepreneur",
        title: "MD ABDULLAH",
        subtitle: "Pioneer in High-Grade Ornamental Fish Breeding & Sustainable Aquaculture",
        desc: "Specializing in purebred Halfmoon Bettas, Albino Guppy Strains, and Premium Exotic Aquatics. Combining genetic science with passion to produce healthy, vibrant aquatic life.",
        btnContact: "Get In Touch",
        btnGallery: "Explore Strains",
        btnWhatsapp: "Chat on WhatsApp"
      },
      stats: [
        { label: "Pure Strains Developed", val: "50+" },
        { label: "Healthy Fishes Delivered", val: "10K+" },
        { label: "Years of Experience", val: "7+" }
      ],
      entrepreneur: {
        tag: "The Journey",
        title: "Meet the Entrepreneur Behind the Breed",
        subtitle: "MD ABDULLAH — Founder & Aquaculture Visionary",
        story1: "Starting with a small home setup and a passion for exotic bettas, MD ABDULLAH transformed his fascination into a leading commercial ornamental aquaculture business.",
        story2: "Through years of intensive line-breeding, water parameter analysis, and genetic selection, he now supplies purebred disease-resistant aquatic lines to hobbyists and commercial farms across the country.",
        image: "public/mhidris.png?auto=format&fit=crop&q=80&w=800" // উদ্যোক্তার প্রফেশনাল ছবি
      },
      species: {
        tag: "Exclusive Strains",
        title: "Featured Fish Strains & Pricing",
        items: [
          { 
            name: "Royal Blue Betta Splendens", 
            desc: "Long flowing fins with vibrant iridescence and high vitality.", 
            type: "Premium Betta",
            price: "৳ 1,200 - ৳ 2,500",
            image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "Full Red Albino Guppy", 
            desc: "Pure high-grade red pigmentation with stable genetic traits for line breeding.", 
            type: "Guppy Strain",
            price: "৳ 800 - ৳ 1,500",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "High-Fin Platinum Angel", 
            desc: "Metallic pearl finish with graceful fin expansion for biotope aquascapes.", 
            type: "Cichlid Family",
            price: "৳ 1,500 - ৳ 3,000",
            image: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&q=80&w=600"
          }
        ]
      },
      services: {
        tag: "Professional Expertise",
        title: "Services & Wholesale Solutions",
        items: [
          { title: "Purebred Wholesale Supply", desc: "Bulk & retail distribution of healthy, fully quarantined ornamental fish strains." },
          { title: "Aquaculture Consultancy", desc: "Expert guidance on commercial breeding setups, disease prevention, and filtration." },
          { title: "Custom Aquascaping Setup", desc: "Bespoke aquarium design with natural biotope setup for corporate & residential spaces." },
          {title: "Healthy Fish Supply", desc: "Carefully selected, active, and healthy ornamental fish supplied through secure packaging for both retail and wholesale customers."},
          {  title: "Betta Breeding Support", desc: "Guidance and support for selecting breeding pairs, preparing breeding setups, and caring for Betta fry."},
          { title: "Safe Fish Delivery",  desc: "Live ornamental fish are carefully packed and transported with proper handling to ensure safe delivery, even to distant locations." 
          },

          { 
            title: "Aquarium Consultancy", 
            desc: "Expert guidance on fish selection, water quality, feeding, filtration, and proper aquarium maintenance." 
          },

          { 
            title: "Fish Food & Accessories", 
            desc: "Access to quality fish food, aquarium accessories, and essential supplies for maintaining healthy ornamental fish." 
          },

          { 
            title: "Complete Aquarium Setup", 
            desc: "Customized aquarium planning and setup assistance based on your available space, budget, preferences, and fish requirements." 
          }
        ]
      },
      faq: {
        tag: "Queries",
        title: "Frequently Asked Questions",
        items: [
          { q: "How do you ensure fish health during delivery?", a: "We use oxygen-packed insulated containers with temperature stabilization to ensure 100% live delivery guarantee." },
          { q: "Do you supply wholesale for retail shops?", a: "Yes, MD ABDULLAH provides bulk shipments for pet stores with guaranteed genetic purity." },
          { q: "Can I consult regarding Betta breeding issues?", a: "Absolutely! You can reach out directly via WhatsApp for personal consultation slots." },
          { q: "What types of aquarium fish are available?", a: "We offer various types of local and exotic aquarium fish, including Betta, Guppy, Goldfish, Angelfish, Molly, Platy, Koi, and more." },

          { q: "How long does delivery take after placing an order?", a: "Delivery is usually arranged as quickly as possible after order confirmation. The delivery time may vary depending on the location and distance." },

          { q: "Are fish food and other aquarium supplies available?", a: "Yes, you can also get information and assistance regarding fish food, aquarium accessories, and other essential aquarium supplies." },

          { q: "What should I do if the fish arrives sick or damaged?", a: "Please check the fish upon delivery and contact us immediately if you notice any issue. We will review the matter and provide the necessary assistance." },

          { q: "Can I get advice for setting up a new aquarium?", a: "Absolutely! We provide helpful guidance on choosing fish, food, accessories, and aquarium setup based on your tank size, fish type, and budget." }
        ]
      }
    },
    bn: {
      nav: { story: "উদ্যোক্তার গল্প", species: "প্রজাতি", services: "সেবাসমূহ", faq: "প্রশ্নাবলী", contact: "যোগাযোগ" },
      hero: {
        tag: "মাস্টার অ্যাকুয়া ব্রিডার ও উদ্যোক্তা",
        title: "মো: আব্দুল্লাহ",
        subtitle: "উন্নত জাতের রঙিন মাছ প্রজনন ও টেকসই অ্যাকুয়াকালচার উদ্ভাবক",
        desc: "বিশুদ্ধ জাতের হাফমুন বিটা, অ্যালবিনো গাপ্পি স্ট্রেন এবং প্রিমিয়াম এক্সোটিক মাছ প্রজনন ও বাজারজাতকরণে বিশ্বস্ত নাম।",
        btnContact: "যোগাযোগ করুন",
        btnGallery: "মাছের প্রজাতি দেখুন",
        btnWhatsapp: "হোয়াটসঅ্যাপে চ্যাট করুন"
      },
      stats: [
        { label: "বিশুদ্ধ জাতের মাছ", val: "৫০+" },
        { label: "সফলভাবে সরবরাহকৃত", val: "১০,০০০+" },
        { label: "বছরের অভিজ্ঞতা", val: "৭+" }
      ],
      entrepreneur: {
        tag: "সাফল্যের গল্প",
        title: "উদ্যোক্তার পথচলা ও দর্শন",
        subtitle: "মো: আব্দুল্লাহ — প্রতিষ্ঠাতা ও অ্যাকুয়াকালচার ভিশনারি",
        story1: "শখের বশে মাত্র দুটি বিটা মাছ নিয়ে শুরু হওয়া পথচলা আজ এক সফল অ্যাকুয়াকালচার উদ্যোগে পরিণত হয়েছে। কঠোর পরিশ্রম ও অধ্যবসায়ের মাধ্যমে মো: আব্দুল্লাহ গড়ে তুলেছেন আধুনিক হ্যাচারি।",
        story2: "মাছের স্বাস্থ্য রক্ষা, উন্নত জিনগত লাইন তৈরি এবং ওয়াটার প্যারামিটার বৈজ্ঞানিকভাবে নিয়ন্ত্রণের মাধ্যমে তিনি সারা দেশের অ্যাকুয়ারিস্ট ও খুচরা বিক্রেতাদের কাছে গুণগত মানের বিশ্বস্ত প্রতীক হয়ে উঠেছেন।",
        image: "public/mhidris.png?auto=format&fit=crop&q=80&w=800"
      },
      species: {
        tag: "বিশেষ কালেকশন",
        title: "জনপ্রিয় মাছের স্ট্রেন ও মূল্য তালিকা",
        items: [
          { 
            name: "রয়েল ব্লু বিটা স্প্লেনডেন্স", 
            desc: "দীর্ঘ আকর্ষণীয় পাখনা এবং উন্নত উজ্জ্বল কালার গ্যারান্টি।", 
            type: "প্রিমিয়াম বিটা",
            price: "৳ ১,২০০ - ৳ ২,৫০০",
            image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "ফুল রেড অ্যালবিনো গাপ্পি", 
            desc: "একটানা নিখুঁত লাল পিগমেন্টেশন সমৃদ্ধ ব্রিডার কোয়ালিটি মাছ।", 
            type: "গাপ্পি স্ট্রেন",
            price: "৳ ৮০০ - ৳ ১,৫০০",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "হাই-ফিন প্ল্যাটিনাম এঞ্জেল", 
            desc: "অ্যাকুয়াস্কেপিং অ্যাকোয়ারিয়ামের জন্য চমৎকার সিলভার প্ল্যাটিনাম ভ্যারাইটি।", 
            type: "এঞ্জেল প্রজাতি",
            price: "৳ ১,৫০০ - ৳ ৩,০০০",
            image: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "রয়েল ব্লু বিটা স্প্লেনডেন্স", 
            desc: "দীর্ঘ আকর্ষণীয় পাখনা এবং উন্নত উজ্জ্বল কালার গ্যারান্টি।", 
            type: "প্রিমিয়াম বিটা",
            price: "৳ ১,২০০ - ৳ ২,৫০০",
            image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "ফুল রেড অ্যালবিনো গাপ্পি", 
            desc: "একটানা নিখুঁত লাল পিগমেন্টেশন সমৃদ্ধ ব্রিডার কোয়ালিটি মাছ।", 
            type: "গাপ্পি স্ট্রেন",
            price: "৳ ৮০০ - ৳ ১,৫০০",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600"
          },
          { 
            name: "হাই-ফিন প্ল্যাটিনাম এঞ্জেল", 
            desc: "অ্যাকুয়াস্কেপিং অ্যাকোয়ারিয়ামের জন্য চমৎকার সিলভার প্ল্যাটিনাম ভ্যারাইটি।", 
            type: "এঞ্জেল প্রজাতি",
            price: "৳ ১,৫০০ - ৳ ৩,০০০",
            image: "public/logo.svg?auto=format&fit=crop&q=80&w=600"
          }
        ]
      },
      services: {
        tag: "প্রফেশনাল সার্ভিস",
        title: "আমাদের সেবাসমূহ",
        items: [
          { title: "পাইকারি ও খুচরা মাছ সরবরাহ", desc: "কোয়ারেন্টাইন সম্পন্ন সুস্থ ও সবল রঙিন মাছের নির্ভরযোগ্য সরবরাহ।" },
          { title: "ফার্ম ও ব্রিডিং কনসালটেন্সি", desc: "পানির প্যারামিটার নিয়ন্ত্রণ, প্রজনন সমস্যা সমাধান ও ফার্ম সেটআপ গাইড।" },
          { title: "কাস্টম অ্যাকুয়াস্কেপ ডিজাইন", desc: "বাসা বা অফিসের জন্য ন্যাচারাল প্ল্যান্টেড ও বায়োটোপ অ্যাকোয়ারিয়াম সেটআপ।" },
          { 
            title: "স্বাস্থ্যকর মাছ সরবরাহ", 
            desc: "বাছাইকৃত, সক্রিয় ও স্বাস্থ্যকর ornamental fish নিরাপদ প্যাকেজিংয়ের মাধ্যমে খুচরা ও পাইকারি সরবরাহ করা হয়।" 
          },

          { 
            title: "বিটা মাছ প্রজনন", 
            desc: "বিটা মাছের breeding pair নির্বাচন, breeding setup এবং fry care সম্পর্কে প্রয়োজনীয় পরামর্শ ও সহায়তা।" 
          },

          { 
            title: "নিরাপদ মাছ ডেলিভারি", 
            desc: "বিশেষ প্যাকেজিং ও পরিবহন ব্যবস্থার মাধ্যমে দূরবর্তী স্থানেও জীবন্ত ornamental fish নিরাপদে পৌঁছে দেওয়ার ব্যবস্থা।" 
          },

          { 
            title: "অ্যাকোয়ারিয়াম পরামর্শ", 
            desc: "মাছ নির্বাচন, পানির মান, খাবার, filtration এবং aquarium maintenance নিয়ে প্রয়োজনীয় expert guidance।" 
          },

          { 
            title: "মাছের খাবার ও এক্সেসরিজ", 
            desc: "Ornamental fish-এর জন্য প্রয়োজনীয় মানসম্মত খাবার, aquarium accessories এবং maintenance essentials সম্পর্কে সহায়তা।" 
          },

          { 
            title: "নতুন অ্যাকোয়ারিয়াম সেটআপ", 
            desc: "আপনার জায়গা, বাজেট ও পছন্দ অনুযায়ী সুন্দর, কার্যকরী এবং মাছবান্ধব aquarium setup-এর পরিকল্পনা ও সহায়তা।" 
          }
        ]
      },
      faq: {
        tag: "জিজ্ঞাসা",
        title: "সাধারণ জিজ্ঞাসাসমূহ",
        items: [
          { q: "ডেলিভারির সময় মাছের সুরক্ষা কীভাবে নিশ্চিত করেন?", a: "আমরা বিশেষ থার্মাল বক্স এবং মেডিকেল অক্সিজেনে প্যাক করে ১০০% নিরাপদ ডেলিভারি নিশ্চিত করি।" },
          { q: "একোয়ারিয়াম শপের জন্য পাইকারি দেওয়া হয় কি?", a: "হ্যাঁ, মো: আব্দুল্লাহ দেশব্যাপী পাইকারি দামে গ্যারান্টিযুক্ত অ্যাকোয়ারিয়াম মাছ সরবরাহ করে থাকেন।" },
          { q: "বিটা মাছের প্রজনন সংক্রান্ত পরামর্শ পাওয়া যাবে কি?", a: "অবশ্যই! সরাসরি হোয়াটসঅ্যাপ বা ফরমের মাধ্যমে যোগাযোগ করে পরামর্শ নিতে পারেন।" },
          { q: "কোন কোন প্রজাতির অ্যাকোয়ারিয়াম মাছ পাওয়া যায়?", a: "বিটা, গাপ্পি, গোল্ডফিশ, অ্যাঞ্জেল, মলি, প্লাটি, কইসহ বিভিন্ন প্রজাতির দেশি-বিদেশি অ্যাকোয়ারিয়াম মাছ পাওয়া যায়।" },

        { q: "অর্ডার করার পর মাছ কতদিনের মধ্যে ডেলিভারি পাওয়া যায়?", a: "সাধারণত অর্ডার কনফার্ম হওয়ার পর দ্রুততম সময়ে ডেলিভারি দেওয়া হয়। দূরত্ব ও লোকেশন অনুযায়ী সময় কিছুটা পরিবর্তিত হতে পারে।" },

        { q: "মাছের সাথে প্রয়োজনীয় খাবার ও অন্যান্য সামগ্রী পাওয়া যায় কি?", a: "হ্যাঁ, মাছের খাবার, অ্যাকোয়ারিয়াম এক্সেসরিজ এবং প্রয়োজনীয় অন্যান্য সামগ্রী সম্পর্কেও আমাদের কাছ থেকে তথ্য ও সহায়তা নিতে পারেন।" },

        { q: "ডেলিভারির সময় মাছ অসুস্থ বা ক্ষতিগ্রস্ত হলে কী করবেন?", a: "ডেলিভারির সময় মাছের অবস্থা যাচাই করে দ্রুত আমাদের সাথে যোগাযোগ করুন। বিষয়টি যাচাই করে প্রয়োজনীয় সহযোগিতা ও সমাধানের ব্যবস্থা করা হবে।" },

        { q: "নতুন অ্যাকোয়ারিয়াম সেটআপের জন্য পরামর্শ পাওয়া যাবে কি?", a: "অবশ্যই! আপনার অ্যাকোয়ারিয়ামের আকার, মাছের ধরন ও বাজেট অনুযায়ী মাছ নির্বাচন, খাবার এবং সেটআপ সম্পর্কে প্রয়োজনীয় পরামর্শ দেওয়া হয়।" }
        ]
      }
    }
  }[lang];

  return (
    <div className="relative min-h-screen text-white select-none">
      <FishCanvas mousePosition={mousePosition} />

      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wider text-cyan-400">MD ABDULLAH</h1>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#story" className="hover:text-cyan-400 transition">{content.nav.story}</a>
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

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
        <div className="max-w-2xl">
          <span className="text-cyan-400 font-semibold tracking-wide uppercase text-xs md:text-sm flex items-center gap-2 mb-2">
            <Waves className="w-4 h-4" /> {content.hero.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
            {content.hero.title}
          </h1>
          <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base mb-2">
            {content.hero.subtitle}
          </p>
          <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base mb-6">
            {content.hero.desc}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-black" />
              {content.hero.btnWhatsapp}
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
              <p className="text-slate-300 font-normal leading-relaxed text-xs md:text-sm">{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Entrepreneur Story Section */}
      <section id="story" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-3xl">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.entrepreneur.tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {content.entrepreneur.title}
          </h2>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl relative group">
                <img 
                  src={content.entrepreneur.image} 
                  alt="MD ABDULLAH - Entrepreneur" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <h4 className="font-bold text-white text-lg">MD ABDULLAH</h4>
                    <p className="text-xs text-cyan-300">Founder & Chief Breeder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
              <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                {content.entrepreneur.subtitle}
              </h3>
              <p>{content.entrepreneur.story1}</p>
              <p>{content.entrepreneur.story2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Species Section with Image & Price */}
      <section id="species" className="py-20 px-6 max-w-6xl mx-auto">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.species.tag}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">{content.species.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {content.species.items.map((sp, idx) => (
            <div key={idx} className="glass p-5 rounded-2xl hover:border-cyan-500/50 transition flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                  <img 
                    src={sp.image} 
                    alt={sp.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <span className="absolute top-2 right-2 text-xs px-2.5 py-1 bg-black/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30 rounded-full font-medium">
                    {sp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{sp.name}</h3>
                <p className="text-slate-300 font-normal leading-relaxed text-xs md:text-sm mb-4">{sp.desc}</p>
              </div>

              <div>
                <div className="flex justify-between items-center pt-3 border-t border-white/10 mb-4">
                  <span className="text-xs text-gray-400">Price Range:</span>
                  <span className="text-sm font-extrabold text-cyan-400">{sp.price}</span>
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(sp.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{content.services.tag}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">{content.services.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.services.items.map((srv, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{srv.title}</h3>
              <p className="text-slate-300 font-normal leading-relaxed text-sm">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Contact Section */}
      <ContactSection lang={lang} />

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 border-t border-white/10 py-4 px-6 text-center text-gray-500 text-sm backdrop-blur-md bg-black/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} MD ABDULLAH. All Rights Reserved.</p> 
          <p>Design & Developed by <a href='https://mhidris.vercel.app' target="_blank" rel="noopener noreferrer"><b><i className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MH IDRIS</i></b></a></p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-cyan-400"><Share2 className="w-5 h-5" /></a>
            <a href="mailto:contact@mdabdullah.com" className="hover:text-cyan-400"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}