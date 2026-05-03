import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebVitals } from "./components/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joseeugenio.com.br'), // Substitua pelo domínio real
  title: {
    default: "José Eugênio | Especialista em Landing Pages de Alta Conversão",
    template: "%s | José Eugênio",
  },
  description: "Desenho e desenvolvo landing pages estratégicas e de alta performance focadas em conversão, velocidade e UX. Transforme seu tráfego em clientes reais.",
  keywords: ["Landing Page", "Web Design", "Conversão", "Desenvolvedor Front-end", "José Eugênio", "Criação de Sites", "Next.js", "Alta Performance"],
  authors: [{ name: "José Eugênio" }],
  creator: "José Eugênio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joseeugenio.com.br",
    title: "José Eugênio | Landing Pages que Convertem",
    description: "Transforme tráfego em clientes com páginas de alta performance e design estratégico.",
    siteName: "José Eugênio - Designer de Landing Pages",
    images: [
      {
        url: "/og-image.jpg", // Crie uma imagem de preview de 1200x630px e coloque em /public
        width: 1200,
        height: 630,
        alt: "José Eugênio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Eugênio | Landing Pages que Convertem",
    description: "Páginas de alta performance e design estratégico focadas em conversão.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://joseeugenio.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD for rich snippets on Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "José Eugênio",
    "url": "https://joseeugenio.com.br",
    "jobTitle": "Designer e Desenvolvedor de Landing Pages",
    "description": "Especialista em criar landing pages de alta conversão usando tecnologia moderna e foco em resultados.",
    "sameAs": [
      "https://github.com/joseeugenio",
      "https://linkedin.com/in/joseeugenio",
      "https://behance.net/joseeugenio"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-foreground bg-[#0a0a0a] selection:bg-emerald-500/30 selection:text-emerald-100" cz-shortcut-listen="true">
        <WebVitals />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
