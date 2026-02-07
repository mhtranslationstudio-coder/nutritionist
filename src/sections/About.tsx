import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const specialties = t.about.specialtyList;

  useEffect(() => {
    const section = sectionRef.current, image = imageRef.current;
    const heading = headingRef.current, text = textRef.current, tags = tagsRef.current;
    if (!section || !image || !heading || !text || !tags) return;

    const triggers: ScrollTrigger[] = [];
    triggers.push(ScrollTrigger.create({
      trigger: section, start: 'top 80%', once: true,
      onEnter: () => gsap.fromTo(image, { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 1.2, ease: 'power3.out' })
    }));
    triggers.push(ScrollTrigger.create({
      trigger: section, start: 'top 70%', once: true,
      onEnter: () => gsap.fromTo(heading, { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
    }));
    triggers.push(ScrollTrigger.create({
      trigger: section, start: 'top 60%', once: true,
      onEnter: () => gsap.fromTo(text.children, { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.3 })
    }));
    triggers.push(ScrollTrigger.create({
      trigger: tags, start: 'top 85%', once: true,
      onEnter: () => gsap.fromTo(tags.children, { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.08 })
    }));
    triggers.push(ScrollTrigger.create({
      trigger: section, start: 'top bottom', end: 'bottom top', scrub: true,
      onUpdate: (self) => gsap.set(image.querySelector('img'), { scale: 1 + self.progress * 0.1 })
    }));

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:-ml-8 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/about-portrait.jpg" alt="Zariff Torres - Nutritionist" className="w-full h-full object-cover" />
            <div className="absolute inset-4 border-2 border-gold/30 rounded-xl pointer-events-none" />
          </div>
          <div className="space-y-8">
            <h2 ref={headingRef} className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-sage-dark">
              {t.about.heading}
            </h2>
            <div ref={textRef} className="space-y-4 text-dark/80 leading-relaxed">
              <p className="font-body text-base sm:text-lg">{t.about.paragraph1}</p>
              <p className="font-body text-base sm:text-lg">{t.about.paragraph2}</p>
              <p className="font-body text-base sm:text-lg">{t.about.paragraph3}</p>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl text-sage-dark mb-4">{t.about.specialties}</h3>
              <div ref={tagsRef} className="flex flex-wrap gap-3">
                {specialties.map((s, i) => (
                  <span key={i} className="px-4 py-2 bg-sage/10 text-sage-dark font-body text-sm rounded-full border border-sage/20 hover:bg-sage hover:text-white transition-all duration-300 cursor-default hover:scale-105">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-sage/5 rounded-full blur-3xl" />
    </section>
  );
}
