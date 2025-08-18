import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Rocket, Brush, Code, Box } from "lucide-react";

const skills = [
  { name: "Graphic Design", icon: <Brush className="w-4 h-4 mr-2" /> },
  { name: "Branding", icon: <Rocket className="w-4 h-4 mr-2" /> },
  { name: "3D Visualization", icon: <Box className="w-4 h-4 mr-2" /> },
  { name: "Blender", icon: <Box className="w-4 h-4 mr-2" /> },
  { name: "UI/UX Mockups", icon: <Code className="w-4 h-4 mr-2" /> },
  { name: "Web Design", icon: <Code className="w-4 h-4 mr-2" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">About Me</h2>
        <Card className="overflow-hidden shadow-2xl shadow-primary/10">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Professional photo of the designer"
                width={600}
                height={800}
                className="h-full w-full object-cover object-top"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-3xl text-accent font-headline">A Passion for Pixels & Purpose</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-foreground/80 p-6 pt-0">
                <p>
                  I'm a creative graphic designer and digital artist with a keen eye for detail and a love for solving complex visual challenges. My journey into design started with a simple curiosity and has grown into a full-fledged passion for creating meaningful and beautiful experiences.
                </p>
                <p>
                  Whether it's crafting a memorable brand identity, designing an intuitive user interface, or bringing ideas to life with 3D rendering, I am dedicated to delivering high-quality work that not only looks great but also achieves its purpose.
                </p>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground font-headline">My Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-md py-2 px-4 bg-primary/50 border-primary/20">
                        {skill.icon}
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <a href="/resume.pdf" download>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
