import { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "pt" | "en" | "fr";
}

const content = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: setembro de 2026",
    close: "Fechar",
    sections: [
      {
        heading: "1. Introdução",
        body: "A France University of Science and Theology (FUST) respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos as informações fornecidas ao acessar nossa plataforma de boas-vindas.",
      },
      {
        heading: "2. Dados Coletados",
        body: "Podemos coletar informações como nome, programa acadêmico e idioma de preferência, fornecidas voluntariamente via parâmetros de URL ou formulários. Não coletamos dados sensíveis sem o seu consentimento explícito.",
      },
      {
        heading: "3. Finalidade do Tratamento",
        body: "Os dados coletados são utilizados exclusivamente para personalizar a experiência de boas-vindas, oferecer suporte acadêmico e comunicar informações institucionais relevantes ao seu ingresso.",
      },
      {
        heading: "4. Compartilhamento de Dados",
        body: "A FUST não vende nem compartilha seus dados pessoais com terceiros para fins comerciais. O compartilhamento ocorre apenas com parceiros institucionais necessários à prestação dos serviços acadêmicos, sempre sob acordos de confidencialidade.",
      },
      {
        heading: "5. Segurança",
        body: "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição.",
      },
      {
        heading: "6. Seus Direitos",
        body: "Você tem direito de acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais a qualquer momento, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais legislações aplicáveis.",
      },
      {
        heading: "7. Cookies",
        body: "Esta plataforma pode utilizar cookies estritamente necessários para o funcionamento técnico da experiência. Nenhum cookie de rastreamento ou publicidade é utilizado.",
      },
      {
        heading: "8. Contato",
        body: "Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com nosso suporte pelo número +55 83 9975-1577 ou pelo e-mail privacidade@fustuniversity.com.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    close: "Close",
    sections: [
      {
        heading: "1. Introduction",
        body: "France University of Science and Theology (FUST) respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use and protect information provided when accessing our welcome platform.",
      },
      {
        heading: "2. Data Collected",
        body: "We may collect information such as name, academic program and preferred language, voluntarily provided via URL parameters or forms. We do not collect sensitive data without your explicit consent.",
      },
      {
        heading: "3. Purpose of Processing",
        body: "Collected data is used exclusively to personalize the welcome experience, provide academic support and communicate institutional information relevant to your enrolment.",
      },
      {
        heading: "4. Data Sharing",
        body: "FUST does not sell or share your personal data with third parties for commercial purposes. Sharing occurs only with institutional partners necessary to provide academic services, always under confidentiality agreements.",
      },
      {
        heading: "5. Security",
        body: "We adopt adequate technical and organizational measures to protect your data against unauthorized access, loss or destruction.",
      },
      {
        heading: "6. Your Rights",
        body: "You have the right to access, correct, delete or request the portability of your personal data at any time, in accordance with applicable data protection legislation.",
      },
      {
        heading: "7. Cookies",
        body: "This platform may use strictly necessary cookies for the technical operation of the experience. No tracking or advertising cookies are used.",
      },
      {
        heading: "8. Contact",
        body: "To exercise your rights or clarify questions about this policy, contact our support at +55 83 9975-1577 or by email at privacy@fustuniversity.com.",
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : septembre 2026",
    close: "Fermer",
    sections: [
      {
        heading: "1. Introduction",
        body: "La France University of Science and Theology (FUST) respecte votre vie privée et s'engage à protéger vos données personnelles. Cette Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons les informations fournies lors de l'accès à notre plateforme d'accueil.",
      },
      {
        heading: "2. Données Collectées",
        body: "Nous pouvons collecter des informations telles que le nom, le programme académique et la langue préférée, fournies volontairement via des paramètres d'URL ou des formulaires. Nous ne collectons pas de données sensibles sans votre consentement explicite.",
      },
      {
        heading: "3. Finalité du Traitement",
        body: "Les données collectées sont utilisées exclusivement pour personnaliser l'expérience d'accueil, offrir un soutien académique et communiquer des informations institutionnelles pertinentes à votre inscription.",
      },
      {
        heading: "4. Partage des Données",
        body: "FUST ne vend ni ne partage vos données personnelles avec des tiers à des fins commerciales. Le partage n'a lieu qu'avec des partenaires institutionnels nécessaires à la prestation des services académiques, toujours dans le cadre d'accords de confidentialité.",
      },
      {
        heading: "5. Sécurité",
        body: "Nous adoptons des mesures techniques et organisationnelles adéquates pour protéger vos données contre tout accès non autorisé, perte ou destruction.",
      },
      {
        heading: "6. Vos Droits",
        body: "Vous avez le droit d'accéder, de corriger, de supprimer ou de demander la portabilité de vos données personnelles à tout moment, conformément à la législation applicable en matière de protection des données.",
      },
      {
        heading: "7. Cookies",
        body: "Cette plateforme peut utiliser des cookies strictement nécessaires au fonctionnement technique de l'expérience. Aucun cookie de suivi ou de publicité n'est utilisé.",
      },
      {
        heading: "8. Contact",
        body: "Pour exercer vos droits ou clarifier des questions sur cette politique, contactez notre support au +55 83 9975-1577 ou par e-mail à confidentialite@fustuniversity.com.",
      },
    ],
  },
};

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
  lang = "pt",
}: PrivacyPolicyModalProps) {
  const c = content[lang] ?? content.pt;

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={c.title}
    >
      <div
        className="relative bg-fust-deep border border-fust-gold/20 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-fust-gold/15 shrink-0">
          <div>
            <p className="text-[9px] tracking-[0.25em] text-fust-gold/60 font-mono uppercase mb-1">
              FUST UNIVERSITY
            </p>
            <h2 className="text-white font-semibold text-lg tracking-wide">
              {c.title}
            </h2>
            <p className="text-[10px] text-white/30 font-mono mt-0.5">{c.updated}</p>
          </div>
          <button
            onClick={onClose}
            aria-label={c.close}
            className="ml-4 shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-7 space-y-6 flex-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-fust-gold/20">
          {c.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-fust-gold text-[11px] font-mono tracking-wider uppercase font-bold mb-2">
                {section.heading}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-fust-gold/10 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-fust-gold/40 text-fust-gold text-[11px] font-mono tracking-widest uppercase hover:bg-fust-gold/10 transition-colors duration-200"
          >
            {c.close}
          </button>
        </div>
      </div>
    </div>
  );
}
