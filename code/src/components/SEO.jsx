import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'

const BASE_URL = 'https://avson.eu'

const langToLocale = {
  ES: 'es_ES', EN: 'en_US', CA: 'ca_ES', EU: 'eu_ES',
  HE: 'he_IL', AR: 'ar_SA', PL: 'pl_PL',
}

const langToHtml = {
  ES: 'es', EN: 'en', CA: 'ca', EU: 'eu',
  HE: 'he', AR: 'ar', PL: 'pl',
}

export default function SEO({ page = 'home', customTitle, customDescription }) {
  const { lang } = useLanguage()

  const seo = getSeoData(page, lang)
  const title = customTitle || seo.title
  const description = customDescription || seo.description

  return (
    <Helmet>
      <html lang={langToHtml[lang] || 'es'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={`${BASE_URL}${seo.path}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${BASE_URL}${seo.path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="avson" />
      <meta property="og:locale" content={langToLocale[lang] || 'es_ES'} />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />

      {/* Structured Data */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  )
}

function getSeoData(page, lang) {
  const data = {
    home: {
      ES: {
        title: 'avson | IA, GRC & Ciberseguridad — Madrid & Barcelona',
        description: 'AVSON: Inteligencia Artificial aplicada a Governance, Risk & Compliance. Consultoría GRC, CISO as a Service, Threat Intelligence e inteligencia operativa para defensa y gobierno.',
      },
      EN: {
        title: 'avson | AI, GRC & Cybersecurity — Madrid & Barcelona',
        description: 'AVSON: Artificial Intelligence applied to Governance, Risk & Compliance. GRC consulting, CISO as a Service, Threat Intelligence and operational intelligence for defense and government.',
      },
      CA: {
        title: 'avson | IA, GRC & Ciberseguretat — Madrid & Barcelona',
        description: 'AVSON: Intel·ligència Artificial aplicada a Governance, Risk & Compliance. Consultoria GRC, CISO as a Service, Threat Intelligence i intel·ligència operativa.',
      },
      EU: {
        title: 'avson | AA, GRC & Zibersegurtasuna — Madrid & Bartzelona',
        description: 'AVSON: Adimen Artifiziala Governance, Risk & Compliance-ra aplikatua. GRC aholkularitza, CISO as a Service, Threat Intelligence eta adimen operatiboa.',
      },
      HE: {
        title: 'avson | בינה מלאכותית, GRC ואבטחת סייבר — מדריד וברצלונה',
        description: 'AVSON: בינה מלאכותית מיושמת לממשל, ניהול סיכונים ותאימות. ייעוץ GRC, CISO כשירות, מודיעין איומים ומודיעין מבצעי.',
      },
      AR: {
        title: 'avson | الذكاء الاصطناعي، GRC والأمن السيبراني — مدريد وبرشلونة',
        description: 'AVSON: الذكاء الاصطناعي المطبق على الحوكمة وإدارة المخاطر والامتثال. استشارات GRC، CISO كخدمة، استخبارات التهديدات.',
      },
      PL: {
        title: 'avson | AI, GRC & Cyberbezpieczeństwo — Madryt i Barcelona',
        description: 'AVSON: Sztuczna inteligencja stosowana w Governance, Risk & Compliance. Doradztwo GRC, CISO as a Service, Threat Intelligence.',
      },
      path: '/',
      keywords: 'GRC, Governance Risk Compliance, ciberseguridad, cybersecurity, inteligencia artificial, IA, AI, CISO as a Service, threat intelligence, ISO 27001, ENS, NIS2, DORA, ISO 22301, Madrid, Barcelona, AVSON, cumplimiento normativo, consultoría seguridad',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'AVSON',
        url: `${BASE_URL}`,
        logo: `${BASE_URL}/favicon.svg`,
        description: 'Inteligencia Artificial aplicada a Governance, Risk & Compliance',
        email: 'hello@avson.eu',
        address: [
          { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
          { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressCountry: 'ES' },
        ],
        serviceType: ['GRC Consulting', 'Cybersecurity', 'Artificial Intelligence', 'Threat Intelligence', 'CISO as a Service'],
        areaServed: { '@type': 'Country', name: 'Spain' },
        priceRange: '$$$$',
      },
    },
    grc: {
      ES: {
        title: 'GRC Estratégico | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'Consultoría GRC end-to-end: certificaciones ISO 27001, ENS, NIS2, DORA, ISO 22301. Auditorías inteligentes, gestión de riesgos y cumplimiento normativo con IA.',
      },
      EN: {
        title: 'Strategic GRC | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'End-to-end GRC consulting: ISO 27001, ENS, NIS2, DORA, ISO 22301 certifications. Intelligent audits, risk management and regulatory compliance with AI.',
      },
      CA: {
        title: 'GRC Estratègic | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'Consultoria GRC end-to-end: certificacions ISO 27001, ENS, NIS2, DORA, ISO 22301. Auditories intel·ligents i compliment normatiu amb IA.',
      },
      EU: {
        title: 'GRC Estrategikoa | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'GRC aholkularitza end-to-end: ISO 27001, ENS, NIS2, DORA, ISO 22301 ziurtagiriak. Auditoretza adimendunak eta arau-betetzea AA-rekin.',
      },
      HE: {
        title: 'GRC אסטרטגי | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'ייעוץ GRC מקצה לקצה: הסמכות ISO 27001, ENS, NIS2, DORA, ISO 22301. ביקורות חכמות, ניהול סיכונים ותאימות רגולטורית.',
      },
      AR: {
        title: 'GRC الاستراتيجي | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'استشارات GRC شاملة: شهادات ISO 27001, ENS, NIS2, DORA, ISO 22301. تدقيقات ذكية وإدارة المخاطر والامتثال التنظيمي.',
      },
      PL: {
        title: 'Strategiczne GRC | avson — ISO 27001, ENS, NIS2, DORA',
        description: 'Kompleksowe doradztwo GRC: certyfikaty ISO 27001, ENS, NIS2, DORA, ISO 22301. Inteligentne audyty i zarządzanie ryzykiem.',
      },
      path: '/grc',
      keywords: 'GRC, Governance Risk Compliance, ISO 27001, ENS, NIS2, DORA, ISO 22301, auditoría, cumplimiento normativo, gestión de riesgos, continuidad de negocio, consultoría GRC, certificación, praesys',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'GRC Estratégico - AVSON',
        provider: { '@type': 'Organization', name: 'AVSON', url: BASE_URL },
        serviceType: 'GRC Consulting',
        description: 'Consultoría GRC end-to-end con certificaciones ISO 27001, ENS, NIS2, DORA, ISO 22301',
        areaServed: { '@type': 'Country', name: 'Spain' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios GRC',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoría estratégica GRC' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certificaciones ISO 27001, ENS, NIS2' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Continuidad de negocio ISO 22301' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formación especializada' } },
          ],
        },
      },
    },
    ai: {
      ES: {
        title: 'Inteligencia Artificial Aplicada | avson — IA para Ciberseguridad',
        description: 'IA real aplicada a ciberseguridad: análisis predictivo de amenazas, defensa autónoma, computer vision security y procesamiento de lenguaje natural para protección empresarial.',
      },
      EN: {
        title: 'Applied Artificial Intelligence | avson — AI for Cybersecurity',
        description: 'Real AI applied to cybersecurity: predictive threat analysis, autonomous defense, computer vision security and NLP for enterprise protection.',
      },
      CA: {
        title: 'Intel·ligència Artificial Aplicada | avson — IA per a Ciberseguretat',
        description: 'IA real aplicada a ciberseguretat: anàlisi predictiu d\'amenaces, defensa autònoma, computer vision security i PLN per a protecció empresarial.',
      },
      EU: {
        title: 'Adimen Artifizial Aplikatua | avson — AA Zibersegurtasunerako',
        description: 'Benetako AA zibersegurtasunera aplikatua: mehatxuen analisi prediktiboa, defentsa autonomoa eta computer vision security.',
      },
      HE: {
        title: 'בינה מלאכותית יישומית | avson — AI לאבטחת סייבר',
        description: 'בינה מלאכותית אמיתית מיושמת לאבטחת סייבר: ניתוח חזוי של איומים, הגנה אוטונומית, ראייה ממוחשבת ועיבוד שפה טבעית.',
      },
      AR: {
        title: 'الذكاء الاصطناعي التطبيقي | avson — AI للأمن السيبراني',
        description: 'ذكاء اصطناعي حقيقي مطبق على الأمن السيبراني: تحليل تنبؤي للتهديدات، دفاع ذاتي، أمن الرؤية الحاسوبية ومعالجة اللغة الطبيعية.',
      },
      PL: {
        title: 'Stosowana Sztuczna Inteligencja | avson — AI dla Cyberbezpieczeństwa',
        description: 'Prawdziwa AI stosowana w cyberbezpieczeństwie: predykcyjna analiza zagrożeń, autonomiczna obrona, computer vision i NLP.',
      },
      path: '/ai',
      keywords: 'inteligencia artificial, IA, AI, machine learning, deep learning, ciberseguridad, threat detection, computer vision, NLP, procesamiento lenguaje natural, defensa autónoma, IA predictiva, AVSON',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Inteligencia Artificial Aplicada - AVSON',
        provider: { '@type': 'Organization', name: 'AVSON', url: BASE_URL },
        serviceType: 'Artificial Intelligence Consulting',
        description: 'IA aplicada a ciberseguridad: análisis predictivo, defensa autónoma, computer vision y NLP',
        areaServed: { '@type': 'Country', name: 'Spain' },
      },
    },
    cyber: {
      ES: {
        title: 'Ciberseguridad Ejecutiva | avson — CISO as a Service & Threat Intelligence',
        description: 'CISO as a Service con experiencia C-Suite. Threat Intelligence con IA propia. +25 años de experiencia liderando ciberseguridad en Fortune 500. Madrid & Barcelona.',
      },
      EN: {
        title: 'Executive Cybersecurity | avson — CISO as a Service & Threat Intelligence',
        description: 'CISO as a Service with C-Suite experience. AI-powered Threat Intelligence. 25+ years leading cybersecurity in Fortune 500 organizations.',
      },
      CA: {
        title: 'Ciberseguretat Executiva | avson — CISO as a Service & Threat Intelligence',
        description: 'CISO as a Service amb experiència C-Suite. Threat Intelligence amb IA pròpia. +25 anys d\'experiència liderant ciberseguretat en Fortune 500.',
      },
      EU: {
        title: 'Zibersegurtasun Exekutiboa | avson — CISO as a Service & Threat Intelligence',
        description: 'CISO as a Service C-Suite esperientziarekin. AA-z bultzatutako Threat Intelligence. +25 urte Fortune 500 erakundeetan.',
      },
      HE: {
        title: 'אבטחת סייבר ברמת הנהלה | avson — CISO כשירות ומודיעין איומים',
        description: 'CISO כשירות עם ניסיון C-Suite. מודיעין איומים מבוסס בינה מלאכותית. +25 שנות ניסיון בהובלת אבטחת סייבר ב-Fortune 500.',
      },
      AR: {
        title: 'الأمن السيبراني التنفيذي | avson — CISO كخدمة واستخبارات التهديدات',
        description: 'CISO كخدمة مع خبرة على مستوى C-Suite. استخبارات التهديدات بالذكاء الاصطناعي. +25 عامًا من الخبرة في Fortune 500.',
      },
      PL: {
        title: 'Cyberbezpieczeństwo Wykonawcze | avson — CISO as a Service & Threat Intelligence',
        description: 'CISO as a Service z doświadczeniem C-Suite. Threat Intelligence oparty na AI. +25 lat doświadczenia w Fortune 500.',
      },
      path: '/cyber',
      keywords: 'CISO as a Service, ciberseguridad, cybersecurity, threat intelligence, SOC, respuesta incidentes, ISO 27001, NIS2, GDPR, forensia digital, Fortune 500, AVSON',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ciberseguridad Ejecutiva - AVSON',
        provider: { '@type': 'Organization', name: 'AVSON', url: BASE_URL },
        serviceType: 'Cybersecurity Consulting',
        description: 'CISO as a Service y Threat Intelligence con IA para protección empresarial',
        areaServed: { '@type': 'Country', name: 'Spain' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de Ciberseguridad',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CISO as a Service' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Threat Intelligence' } },
          ],
        },
      },
    },
    intel: {
      ES: {
        title: 'Inteligencia & Defensa | avson — NYCTOS Intelligence Platform',
        description: 'NYCTOS: plataforma de inteligencia operativa multi-dominio. 5 módulos: geopolítica, OSINT, cyber intelligence, tracking y mercados. Para defensa, gobierno y fuerzas de seguridad.',
      },
      EN: {
        title: 'Intelligence & Defense | avson — NYCTOS Intelligence Platform',
        description: 'NYCTOS: multi-domain operational intelligence platform. 5 modules: geopolitics, OSINT, cyber intelligence, tracking and markets. For defense, government and law enforcement.',
      },
      CA: {
        title: 'Intel·ligència & Defensa | avson — NYCTOS Intelligence Platform',
        description: 'NYCTOS: plataforma d\'intel·ligència operativa multi-domini. 5 mòduls: geopolítica, OSINT, cyber intelligence, tracking i mercats.',
      },
      EU: {
        title: 'Adimena & Defentsa | avson — NYCTOS Intelligence Platform',
        description: 'NYCTOS: domeinu anitzeko adimen operatiboko plataforma. 5 modulu: geopolitika, OSINT, cyber intelligence, tracking eta merkatuak.',
      },
      HE: {
        title: 'מודיעין והגנה | avson — פלטפורמת המודיעין NYCTOS',
        description: 'NYCTOS: פלטפורמת מודיעין מבצעי רב-תחומית. 5 מודולים: גיאופוליטיקה, OSINT, מודיעין סייבר, מעקב ושווקים.',
      },
      AR: {
        title: 'الاستخبارات والدفاع | avson — منصة NYCTOS للاستخبارات',
        description: 'NYCTOS: منصة استخبارات تشغيلية متعددة المجالات. 5 وحدات: جيوسياسية، OSINT، استخبارات سيبرانية، تتبع وأسواق.',
      },
      PL: {
        title: 'Wywiad & Obrona | avson — Platforma Wywiadowcza NYCTOS',
        description: 'NYCTOS: wielodomenowa platforma wywiadu operacyjnego. 5 modułów: geopolityka, OSINT, cyber intelligence, tracking i rynki.',
      },
      path: '/intel',
      keywords: 'NYCTOS, inteligencia operativa, intelligence platform, OSINT, threat intelligence, geopolítica, tracking, defensa, gobierno, fuerzas seguridad, military intelligence, AVSON, SIGINT, SOCMINT',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'NYCTOS Intelligence Platform',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Contact for pricing' },
        provider: { '@type': 'Organization', name: 'AVSON', url: BASE_URL },
        description: 'Plataforma de inteligencia operativa multi-dominio para organismos de defensa y gobierno',
        featureList: 'Geopolitics, OSINT, Cyber Intelligence, Tracking, Markets',
      },
    },
  }

  const pageData = data[page] || data.home
  const langData = pageData[lang] || pageData.ES

  return {
    title: langData.title,
    description: langData.description,
    keywords: pageData.keywords,
    path: pageData.path,
    structuredData: pageData.structuredData,
  }
}
