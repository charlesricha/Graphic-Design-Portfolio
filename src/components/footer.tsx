import Link from 'next/link';
import { Linkedin, Instagram, Code } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-primary/20 py-8">
      <div className="container mx-auto px-4 text-center text-foreground/60">
        <div className="flex justify-center items-center gap-2 mb-4">
            <Code className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold font-headline text-foreground/80">Adrian</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-accent">
                    <Instagram className="h-5 w-5" />
                </Button>
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Adrian. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
