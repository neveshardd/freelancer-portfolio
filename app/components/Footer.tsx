"use client";
import { Mail, Smartphone } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="border-t border-border-custom bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-xl font-bold text-zinc-100 tracking-tight">José Eugênio</span>
          <span className="text-sm text-zinc-500">Designer e Desenvolvedor de Landing Pages</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:soujoseeugenio@gmail.com" className="text-zinc-500 hover:text-emerald-custom transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5561998661866" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-custom transition-colors" aria-label="WhatsApp">
            <Smartphone className="w-5 h-5" />
          </a>
          <a href="https://github.com/neveshardd" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-custom transition-colors" aria-label="GitHub">
            <BsGithub className="w-5 h-5" />
          </a>
          {/* Behance Icon using an SVG path since Lucide might not have it directly */}
          <a href="https://www.behance.net/joseugnio3" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-custom transition-colors" aria-label="Behance">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.897 5.335 4.411h-8.528c.144 2.144 1.536 3.8 3.22 3.8 1.411 0 2.228-.68 2.651-1.616h2.521zm-4.383-3.414c-.066-1.554-1.127-3.08-2.618-3.08-1.503 0-2.43 1.487-2.583 3.08h5.201zm-13.434-6.422l.063 12.836h-5.972v-17h7.493c2.404 0 4.475 1.155 4.475 3.992 0 1.597-.936 2.748-2.091 3.238 1.408.406 2.628 1.545 2.628 3.738 0 3.328-2.735 4.196-5.26 4.196h-1.336zm0-2.62v3.743h1.365c1.17 0 2.04-.378 2.04-1.859 0-1.408-.854-1.884-2.083-1.884h-1.322zm0 5.617v4.184h1.56c1.381 0 2.348-.52 2.348-2.083 0-1.603-.976-2.101-2.316-2.101h-1.592z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
