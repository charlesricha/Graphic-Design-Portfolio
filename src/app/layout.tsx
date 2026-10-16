import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Charles Muthui — Graphic Designer & Brand Director',
  description: 'Portfolio of Charles Muthui. Packaging design, commercial retail storefronts, event campaigns, brand systems, and digital art in Kenya.',
  openGraph: {
    title: 'Charles Muthui — Graphic Designer & Brand Director',
    description: 'Crafting brand identities, packaging, retail storefronts, and high-energy event visual campaigns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth selection:bg-[#FFB700] selection:text-[#0C0D0E]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Syne:wght@400..800&family=Outfit:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#0C0D0E] text-[#F4F3EE] antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

