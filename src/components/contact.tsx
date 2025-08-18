import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-accent font-headline">Let's Create Together</h3>
            <p className="text-lg text-foreground/80 mb-8">
              I'm always excited to hear about new projects and opportunities. If you have an idea, a question, or just want to say hello, feel free to reach out. Let's build something amazing.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@designverse.com" className="flex items-center gap-4 text-lg hover:text-accent transition-colors">
                <Mail className="w-6 h-6 text-accent" />
                <span>hello@designverse.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 text-lg hover:text-accent transition-colors">
                <Phone className="w-6 h-6 text-accent" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-4 pt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-input border-border focus:ring-accent" />
                <Input type="email" placeholder="Your Email" className="bg-input border-border focus:ring-accent" />
                <Textarea placeholder="Your Message" rows={5} className="bg-input border-border focus:ring-accent" />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
