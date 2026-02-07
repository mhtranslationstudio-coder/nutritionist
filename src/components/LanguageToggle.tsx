import { useLanguage, type Language } from '@/context/LanguageContext';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-body">
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <span className="uppercase text-xs font-medium">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white rounded-xl shadow-xl border border-sage/10 min-w-[160px] z-50 animate-fade-in">
          {languages.map((lang) => (
            <button key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-sage/5 transition-colors duration-200 ${
                      language === lang.code ? 'text-sage' : 'text-dark'
                    }`}>
              <div className="flex items-center gap-3">
                <span className="text-lg">{lang.flag}</span>
                <span className="font-body text-sm">{lang.label}</span>
              </div>
              {language === lang.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
