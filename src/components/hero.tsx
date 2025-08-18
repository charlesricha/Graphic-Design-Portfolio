"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary rounded-full opacity-20 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-40 -left-10 w-60 h-60 bg-primary rounded-full opacity-10 filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-6xl md:text-8xl font-black font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 animate-text-shine">
          Your Name
        </h1>
        <p className="mt-4 text-2xl md:text-4xl font-semibold text-accent font-headline">
          Graphic Designer & Creative Innovator
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
          Crafting visually stunning and impactful designs that tell a story. 
          Specializing in modern aesthetics and user-centric experiences.
        </p>
        <div className="mt-8">
          <Link href="#portfolio">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes text-shine {
          0% { background-position: 200% 50%; }
          100% { background-position: -200% 50%; }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
