import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jornada Investidor Inteligente | Imersão Presencial com Luciano Mangueira",
  description: "Aprenda a investir com segurança em apenas 1 dia. Imersão presencial, prática e guiada para você organizar sua vida financeira e montar sua carteira.",
  openGraph: {
    title: "Jornada Investidor Inteligente",
    description: "Imersão presencial de 1 dia para dominar seus investimentos.",
    type: "website",
    locale: "pt_BR",
    url: "https://jornadainvestidor.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent/30 selection:text-premium-dark`}>
        {children}
      </body>
    </html>
  );
}
