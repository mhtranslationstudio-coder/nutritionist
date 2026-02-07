import { Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-dark py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-heading text-lg text-cream">Zariff Torres</p>
            <p className="font-body text-xs text-cream/50 mt-1">{t.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-2 text-cream/50">
            <span className="font-body text-xs">{t.footer.madeWith}</span>
            <Heart className="w-3 h-3 text-gold fill-gold" />
            <span className="font-body text-xs">{t.footer.forHealth}</span>
          </div>
          <p className="font-body text-xs text-cream/50">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
