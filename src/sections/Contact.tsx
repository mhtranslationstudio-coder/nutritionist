import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Instagram, Linkedin, MapPin, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const whatsappLink = `https://wa.me/+5585992233635?text=${encodeURIComponent('Olá! Gostaria de entrar em contato.')}`;

  useEffect(() => {
    const section = sectionRef.current, content = contentRef.current;
    if (!section || !content) return;

    const trigger = ScrollTrigger.create({
      trigger: section, start: 'top 80%', once: true,
      onEnter: () => gsap.fromTo(content.children, { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 })
    });

    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-sage-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={contentRef} className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-cream">{t.contact.heading}</h2>
            <p className="font-body text-lg text-cream/70 max-w-xl mx-auto">{t.contact.subheading}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 flex-wrap">
            <a href="mailto:zarifftorresnutricionista@gmail.com"
               className="group flex items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-left">
                <p className="font-body text-xs text-cream/60 uppercase tracking-wider">{t.contact.email}</p>
                <p className="font-body text-sm text-cream group-hover:text-gold transition-colors duration-300">zarifftorresnutricionista@gmail.com</p>
              </div>
            </a>

            <a href="https://www.instagram.com/zarifftorresnutri" target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-left">
                <p className="font-body text-xs text-cream/60 uppercase tracking-wider">Instagram</p>
                <p className="font-body text-sm text-cream group-hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  @zarifftorresnutri <ExternalLink className="w-3 h-3 opacity-50" />
                </p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/zariff-torres-da-costa" target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-left">
                <p className="font-body text-xs text-cream/60 uppercase tracking-wider">LinkedIn</p>
                <p className="font-body text-sm text-cream group-hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  Zariff Torres da Costa <ExternalLink className="w-3 h-3 opacity-50" />
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-cream/50">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-body text-sm">{t.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-body text-sm">{t.contact.online}</span>
            </div>
          </div>

          <div className="pt-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-sage-dark font-body font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1">
              <Phone className="w-5 h-5" />
              <span>{t.contact.getInTouch}</span>
            </a>
          </div>

          <div className="pt-12 border-t border-white/10">
            <blockquote className="font-heading text-xl sm:text-2xl text-cream/80 italic">"{t.contact.quote}"</blockquote>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-sage/10 rounded-full blur-3xl" />
    </section>
  );
}
