import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '@/context/LanguageContext';

interface Particle {
  x: number; y: number; vx: number; vy: number; radius: number; opacity: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = 0, mouseY = 0, isMouseActive = false;
    let mouseTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY; isMouseActive = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => isMouseActive = false, 100);
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (isMouseActive) {
          const dx = mouseX - p.x, dy = mouseY - p.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) { p.vx -= dx * 0.0001; p.vy -= dy * 0.0001; }
        }
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 138, 116, ${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(125, 138, 116, ${0.1 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(containerRef.current, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8 })
      .fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.2)
      .fromTo(subtitleRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.4)
      .fromTo(taglineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6);

    gsap.to(titleRef.current, { scale: 1.02, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div ref={containerRef} className="absolute inset-0 z-0"
           style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-cream/30 via-transparent to-cream/80" />
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] pointer-events-none" />
      <div className="relative z-[3] text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-sage-dark mb-4 tracking-tight">
          Zariff Torres
        </h1>
        <p ref={subtitleRef} className="font-body text-lg sm:text-xl md:text-2xl text-sage font-medium tracking-widest uppercase mb-6">
          {t.hero.title}
        </p>
        <p ref={taglineRef} className="font-heading text-xl sm:text-2xl md:text-3xl text-dark/80 italic max-w-2xl mx-auto">
          "{t.hero.tagline}"
        </p>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sage rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-sage rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
