import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface ServiceItem {
  title: string;
  description: string;
}

interface FilterLabels {
  all: string;
  clinical: string;
  sports: string;
  specialized: string;
  certification: string;
}

interface NavLabels {
  about: string;
  certificates: string;
  services: string;
  contact: string;
}

interface HeroLabels {
  title: string;
  tagline: string;
}

interface AboutLabels {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  specialties: string;
  specialtyList: string[];
}

interface CertificatesLabels {
  heading: string;
  subheading: string;
  filters: FilterLabels;
  showing: string;
  of: string;
  certificates: string;
  description: string;
  skills: string;
  completed: string;
}

interface ServicesLabels {
  heading: string;
  subheading: string;
  learnMore: string;
  schedule: string;
  notSure: string;
  items: ServiceItem[];
}

interface ContactLabels {
  heading: string;
  subheading: string;
  email: string;
  instagram: string;
  linkedin: string;
  location: string;
  online: string;
  getInTouch: string;
  quote: string;
}

interface FooterLabels {
  tagline: string;
  madeWith: string;
  forHealth: string;
}

interface Translations {
  nav: NavLabels;
  hero: HeroLabels;
  about: AboutLabels;
  certificates: CertificatesLabels;
  services: ServicesLabels;
  contact: ContactLabels;
  footer: FooterLabels;
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      certificates: 'Certificados',
      services: 'Serviços',
      contact: 'Contato',
    },
    hero: {
      title: 'Nutricionista & Consultora de Saúde',
      tagline: 'Orientação nutricional baseada em evidências respaldada pelo aprendizado contínuo',
    },
    about: {
      heading: 'Sobre Mim',
      paragraph1: 'Nutricionista com foco em nutrição clínica, saúde feminina e cuidado nutricional de pessoas idosas. Atuo no manejo de doenças crônicas não transmissíveis, como diabetes e hipertensão, com uma abordagem individualizada e baseada em evidências.',
      paragraph2: 'Tenho especial interesse em alimentação vegetariana e vegana, estética feminina e estratégias nutricionais voltadas à promoção da saúde, bem-estar e longevidade.',
      paragraph3: 'Valorizo uma prática ética, acolhedora e comprometida com resultados sustentáveis.',
      specialties: 'Especialidades',
      specialtyList: [
        'Nutrição Clínica',
        'Saúde e Estética Feminina',
        'Nutrição Geriátrica',
        'Manejo de Diabetes e Hipertensão',
        'Doenças Crônicas Não Transmissíveis',
        'Alimentação Vegetariana e Vegana',
      ],
    },
    certificates: {
      heading: 'Biblioteca de Expertise',
      subheading: 'Uma coleção de aprendizado contínuo e desenvolvimento profissional',
      filters: {
        all: 'Todos',
        clinical: 'Nutrição Clínica',
        sports: 'Nutrição Esportiva',
        specialized: 'Cursos Especializados',
        certification: 'Certificações',
      },
      showing: 'Mostrando',
      of: 'de',
      certificates: 'certificados',
      description: 'Descrição',
      skills: 'Habilidades Adquiridas',
      completed: 'Concluído',
    },
    services: {
      heading: 'Como Posso Ajudar',
      subheading: 'Serviços de nutrição abrangentes adaptados às suas necessidades únicas e objetivos de saúde',
      learnMore: 'Saiba Mais',
      schedule: 'Agende uma Consulta',
      notSure: 'Não tem certeza qual serviço é ideal para você?',
      items: [
        {
          title: 'Nutrição Clínica',
          description: 'Terapia nutricional baseada em evidências para o manejo de condições crônicas como diabetes, hipertensão e distúrbios metabólicos. Planos de tratamento personalizados focados em melhorar os resultados de saúde.',
        },
        {
          title: 'Saúde da Mulher',
          description: 'Suporte nutricional especializado para todas as fases da vida, incluindo cuidados pré-natais, equilíbrio hormonal, manejo da menopausa e bem-estar estético. Uma abordagem holística para a saúde feminina.',
        },
        {
          title: 'Nutrição Geriátrica',
          description: 'Cuidado nutricional compassivo focado no envelhecimento saudável, manutenção da vitalidade e manejo de condições relacionadas à idade. Apoiando a longevidade e qualidade de vida para idosos.',
        },
        {
          title: 'Nutrição Baseada em Plantas',
          description: 'Orientação especializada em dietas vegetarianas e veganas garantindo nutrição ideal, macros balanceados e escolhas de estilo de vida sustentáveis. Tornando a alimentação à base de plantas saudável e deliciosa.',
        },
      ],
    },
    contact: {
      heading: 'Comece Sua Jornada',
      subheading: 'Pronto para transformar sua saúde? Vamos trabalhar juntos para alcançar seus objetivos de bem-estar.',
      email: 'Email',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      location: 'Fortaleza, Ceará, Brasil',
      online: 'Consultas Online Disponíveis',
      getInTouch: 'Entre em Contato',
      quote: 'Sua saúde é um investimento, não uma despesa.',
    },
    footer: {
      tagline: 'Nutricionista & Consultora de Saúde',
      madeWith: 'Feito com',
      forHealth: 'para uma saúde melhor',
    },
  },
  en: {
    nav: {
      about: 'About',
      certificates: 'Certificates',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'Nutritionist & Health Consultant',
      tagline: 'Evidence-based nutrition guidance backed by continuous learning',
    },
    about: {
      heading: 'About Me',
      paragraph1: 'Nutritionist focused on clinical nutrition, women\'s health, and nutritional care for the elderly. I work in the management of chronic non-communicable diseases, such as diabetes and hypertension, with an individualized and evidence-based approach.',
      paragraph2: 'I have a special interest in vegetarian and vegan nutrition, female aesthetics, and nutritional strategies aimed at promoting health, well-being, and longevity.',
      paragraph3: 'I value an ethical, welcoming practice committed to sustainable results.',
      specialties: 'Specialties',
      specialtyList: [
        'Clinical Nutrition',
        'Women\'s Health & Aesthetics',
        'Geriatric Nutrition',
        'Diabetes & Hypertension Management',
        'Chronic Non-Communicable Diseases',
        'Vegetarian & Vegan Nutrition',
      ],
    },
    certificates: {
      heading: 'Library of Expertise',
      subheading: 'A collection of continuous learning and professional development',
      filters: {
        all: 'All',
        clinical: 'Clinical Nutrition',
        sports: 'Sports Nutrition',
        specialized: 'Specialized Courses',
        certification: 'Certifications',
      },
      showing: 'Showing',
      of: 'of',
      certificates: 'certificates',
      description: 'Description',
      skills: 'Skills Gained',
      completed: 'Completed',
    },
    services: {
      heading: 'How I Can Help You',
      subheading: 'Comprehensive nutrition services tailored to your unique needs and health goals',
      learnMore: 'Learn More',
      schedule: 'Schedule a Consultation',
      notSure: 'Not sure which service is right for you?',
      items: [
        {
          title: 'Clinical Nutrition',
          description: 'Evidence-based nutritional therapy for managing chronic conditions like diabetes, hypertension, and metabolic disorders. Personalized treatment plans focused on improving health outcomes.',
        },
        {
          title: 'Women\'s Health',
          description: 'Specialized nutrition support for all life stages including prenatal care, hormonal balance, menopause management, and aesthetic wellness. A holistic approach to feminine health.',
        },
        {
          title: 'Geriatric Nutrition',
          description: 'Compassionate nutritional care focused on healthy aging, maintaining vitality, and managing age-related conditions. Supporting longevity and quality of life for seniors.',
        },
        {
          title: 'Plant-Based Nutrition',
          description: 'Expert guidance on vegetarian and vegan diets ensuring optimal nutrition, balanced macros, and sustainable lifestyle choices. Making plant-based eating healthy and delicious.',
        },
      ],
    },
    contact: {
      heading: 'Start Your Journey',
      subheading: 'Ready to transform your health? Let\'s work together to achieve your wellness goals.',
      email: 'Email',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      location: 'Fortaleza, Ceará, Brazil',
      online: 'Online Consultations Available',
      getInTouch: 'Get in Touch',
      quote: 'Your health is an investment, not an expense.',
    },
    footer: {
      tagline: 'Nutritionist & Health Consultant',
      madeWith: 'Made with',
      forHealth: 'for better health',
    },
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      certificates: 'Certificados',
      services: 'Servicios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Nutricionista y Consultora de Salud',
      tagline: 'Orientación nutricional basada en evidencia respaldada por el aprendizaje continuo',
    },
    about: {
      heading: 'Sobre Mí',
      paragraph1: 'Nutricionista enfocada en nutrición clínica, salud femenina y cuidado nutricional de personas mayores. Trabajo en el manejo de enfermedades crónicas no transmisibles, como diabetes e hipertensión, con un enfoque individualizado y basado en evidencia.',
      paragraph2: 'Tengo un interés especial en la nutrición vegetariana y vegana, la estética femenina y las estrategias nutricionales orientadas a promover la salud, el bienestar y la longevidad.',
      paragraph3: 'Valoro una práctica ética, acogedora y comprometida con resultados sostenibles.',
      specialties: 'Especialidades',
      specialtyList: [
        'Nutrición Clínica',
        'Salud y Estética Femenina',
        'Nutrición Geriátrica',
        'Manejo de Diabetes e Hipertensión',
        'Enfermedades Crónicas No Transmisibles',
        'Nutrición Vegetariana y Vegana',
      ],
    },
    certificates: {
      heading: 'Biblioteca de Experiencia',
      subheading: 'Una colección de aprendizaje continuo y desarrollo profesional',
      filters: {
        all: 'Todos',
        clinical: 'Nutrición Clínica',
        sports: 'Nutrición Deportiva',
        specialized: 'Cursos Especializados',
        certification: 'Certificaciones',
      },
      showing: 'Mostrando',
      of: 'de',
      certificates: 'certificados',
      description: 'Descripción',
      skills: 'Habilidades Adquiridas',
      completed: 'Completado',
    },
    services: {
      heading: 'Cómo Puedo Ayudarte',
      subheading: 'Servicios de nutrición integrales adaptados a tus necesidades únicas y objetivos de salud',
      learnMore: 'Saber Más',
      schedule: 'Agendar una Consulta',
      notSure: '¿No estás segura de qué servicio es el adecuado para ti?',
      items: [
        {
          title: 'Nutrición Clínica',
          description: 'Terapia nutricional basada en evidencia para el manejo de condiciones crónicas como diabetes, hipertensión y trastornos metabólicos. Planes de tratamiento personalizados enfocados en mejorar los resultados de salud.',
        },
        {
          title: 'Salud Femenina',
          description: 'Apoyo nutricional especializado para todas las etapas de la vida, incluyendo atención prenatal, equilibrio hormonal, manejo de la menopausia y bienestar estético. Un enfoque holístico para la salud femenina.',
        },
        {
          title: 'Nutrición Geriátrica',
          description: 'Atención nutricional compasiva enfocada en el envejecimiento saludable, mantenimiento de la vitalidad y manejo de condiciones relacionadas con la edad. Apoyando la longevidad y calidad de vida para personas mayores.',
        },
        {
          title: 'Nutrición Basada en Plantas',
          description: 'Orientación experta en dietas vegetarianas y veganas garantizando nutrición óptima, macros balanceados y elecciones de estilo de vida sostenibles. Haciendo que la alimentación basada en plantas sea saludable y deliciosa.',
        },
      ],
    },
    contact: {
      heading: 'Comienza Tu Viaje',
      subheading: '¿Lista para transformar tu salud? Trabajemos juntas para alcanzar tus objetivos de bienestar.',
      email: 'Correo',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      location: 'Fortaleza, Ceará, Brasil',
      online: 'Consultas en Línea Disponibles',
      getInTouch: 'Ponte en Contacto',
      quote: 'Tu salud es una inversión, no un gasto.',
    },
    footer: {
      tagline: 'Nutricionista y Consultora de Salud',
      madeWith: 'Hecho con',
      forHealth: 'para una salud mejor',
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      certificates: 'Certificats',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'Nutritionniste et Consultante en Santé',
      tagline: 'Conseils nutritionnels fondés sur des données probantes, soutenus par un apprentissage continu',
    },
    about: {
      heading: 'À Propos de Moi',
      paragraph1: 'Nutritionniste spécialisée en nutrition clinique, santé féminine et soins nutritionnels des personnes âgées. Je travaille sur la prise en charge des maladies chroniques non transmissibles, comme le diabète et l\'hypertension, avec une approche individualisée et fondée sur des données probantes.',
      paragraph2: 'Je porte un intérêt particulier à la nutrition végétarienne et végétalienne, à l\'esthétique féminine et aux stratégies nutritionnelles visant à promouvoir la santé, le bien-être et la longévité.',
      paragraph3: 'Je valorise une pratique éthique, accueillante et engagée envers des résultats durables.',
      specialties: 'Spécialités',
      specialtyList: [
        'Nutrition Clinique',
        'Santé et Esthétique Féminine',
        'Nutrition Gériatrique',
        'Prise en Charge du Diabète et de l\'Hypertension',
        'Maladies Chroniques Non Transmissibles',
        'Nutrition Végétarienne et Végétalienne',
      ],
    },
    certificates: {
      heading: 'Bibliothèque d\'Expertise',
      subheading: 'Une collection d\'apprentissage continu et de développement professionnel',
      filters: {
        all: 'Tous',
        clinical: 'Nutrition Clinique',
        sports: 'Nutrition Sportive',
        specialized: 'Cours Spécialisés',
        certification: 'Certifications',
      },
      showing: 'Affichage de',
      of: 'sur',
      certificates: 'certificats',
      description: 'Description',
      skills: 'Compétences Acquises',
      completed: 'Terminé',
    },
    services: {
      heading: 'Comment Je Peux Vous Aider',
      subheading: 'Services nutritionnels complets adaptés à vos besoins uniques et objectifs de santé',
      learnMore: 'En Savoir Plus',
      schedule: 'Prendre Rendez-vous',
      notSure: 'Vous ne savez pas quel service vous convient?',
      items: [
        {
          title: 'Nutrition Clinique',
          description: 'Thérapie nutritionnelle fondée sur des données probantes pour la prise en charge des maladies chroniques comme le diabète, l\'hypertension et les troubles métaboliques. Plans de traitement personnalisés axés sur l\'amélioration des résultats de santé.',
        },
        {
          title: 'Santé Féminine',
          description: 'Soutien nutritionnel spécialisé pour toutes les étapes de la vie, y compris les soins prénataux, l\'équilibre hormonal, la prise en charge de la ménopause et le bien-être esthétique. Une approche holistique de la santé féminine.',
        },
        {
          title: 'Nutrition Gériatrique',
          description: 'Soins nutritionnels bienveillants axés sur le vieillissement en santé, le maintien de la vitalité et la prise en charge des conditions liées à l\'âge. Soutien à la longévité et à la qualité de vie des personnes âgées.',
        },
        {
          title: 'Nutrition Basée sur les Plantes',
          description: 'Conseils d\'experts sur les régimes végétariens et végétaliens garantissant une nutrition optimale, des macros équilibrés et des choix de mode de vie durables. Rendre l\'alimentation à base de plantes saine et délicieuse.',
        },
      ],
    },
    contact: {
      heading: 'Commencez Votre Voyage',
      subheading: 'Prête à transformer votre santé? Travaillons ensemble pour atteindre vos objectifs de bien-être.',
      email: 'Email',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      location: 'Fortaleza, Ceará, Brésil',
      online: 'Consultations en Ligne Disponibles',
      getInTouch: 'Prendre Contact',
      quote: 'Votre santé est un investissement, pas une dépense.',
    },
    footer: {
      tagline: 'Nutritionniste et Consultante en Santé',
      madeWith: 'Fait avec',
      forHealth: 'pour une meilleure santé',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { Language };
