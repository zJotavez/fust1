import { ExternalLink } from "lucide-react";
import { LocaleContent } from "../data/welcome-content";

interface MinimalFooterProps {
  content: LocaleContent;
}

export default function MinimalFooter({ content }: MinimalFooterProps) {
  return (
    <footer className="bg-fust-deep py-14 px-6 border-t border-fust-gold/15 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand signature */}
        <div className="flex items-center space-x-3.5 text-center md:text-left select-none">
          <div className="w-10 h-10 rounded-full border border-fust-gold/30 bg-white flex items-center justify-center overflow-hidden p-0.5 shadow-md">
            <img src="/logo-crest.png" alt="FUST Crest" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.2em] text-white/90 font-bold block uppercase font-mono">
              FUST UNIVERSITY
            </span>
            <span className="text-[9px] text-white/50 block font-light">
              Florida University of Science and Theology
            </span>
          </div>
        </div>

        {/* Legal copy & Quick links */}
        <div className="text-center md:text-right space-y-3">
          <p className="text-[10px] text-white/30 font-mono tracking-wide">
            {content.footer.allRightsReserved}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-[9px] font-mono tracking-wider uppercase font-bold text-fust-gold-light">
            <a
              href="https://fust.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center space-x-1 transition-colors duration-300"
            >
              <span>{content.footer.officialWebsite}</span>
              <ExternalLink className="w-2.5 h-2.5 text-fust-gold" />
            </a>
            <a
              href="https://fust.edu/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              {content.footer.privacyPolicy}
            </a>
            <a
              href="https://fust.edu/support"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              {content.footer.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
