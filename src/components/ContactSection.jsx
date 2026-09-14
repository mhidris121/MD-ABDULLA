import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection({ lang = 'en' }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // ফরমের ইনপুট থেকে ডাটা গ্রহণ
    const formElement = formRef.current;
    
    const timeString = new Date().toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const templateParams = {
      user_name: formElement.user_name.value,
      user_email: formElement.user_email.value,
      user_message: formElement.user_message.value,
      time: timeString
    };

    emailjs.send(
      'service_mh3mo99',
      'template_y2q06ao',
      templateParams,
      'ah7k_D7s7tAM3t0ty'
    )
    .then(() => {
      setLoading(false);
      setStatus('success');
      formElement.reset();
      
      // ৫ সেকেন্ড পর স্ট্যাটাস মেসেজ রিমুভ করা
      setTimeout(() => setStatus(null), 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setLoading(false);
      setStatus('error');
    });
  };

  const translations = {
    en: {
      title: "Get In Touch",
      subtitle: "Interested in premium ornamental fish breeding or aquaculture consultancy?",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      btn: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again."
    },
    bn: {
      title: "যোগাযোগ করুন",
      subtitle: "প্রিমিয়াম রঙিন মাছের পোনা বা অ্যাকোয়ারিয়াম প্রজনন পরামর্শের জন্য ইনবক্স করুন।",
      name: "আপনার নাম",
      email: "আপনার ইমেইল",
      message: "বার্তা লিখুন",
      btn: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে...",
      success: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে!",
      error: "কোথাও ভুল হয়েছে! আবার চেষ্টা করুন।"
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {t.title}
        </h2>
        <p className="text-gray-400 mb-8">{t.subtitle}</p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{t.name}</label>
            <input 
              type="text" 
              name="user_name" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{t.email}</label>
            <input 
              type="email" 
              name="user_email" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">{t.message}</label>
            <textarea 
              name="user_message" 
              rows="4" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50 cursor-pointer text-white"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {t.sending}
              </>
            ) : (
              <>
                {t.btn} <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0" /> {t.success}
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" /> {t.error}
          </div>
        )}
      </div>
    </section>
  );
}