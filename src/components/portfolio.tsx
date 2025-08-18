import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Alpha",
    category: "Logo Design",
    image: "https://placehold.co/600x400.png",
    hint: "logo design",
  },
  {
    title: "Project Beta",
    category: "Poster Design",
    image: "https://placehold.co/600x400.png",
    hint: "poster design",
  },
  {
    title: "Project Gamma",
    category: "3D Render",
    image: "https://placehold.co/600x400.png",
    hint: "3d render",
  },
  {
    title: "Project Delta",
    category: "UI/UX Mockup",
    image: "https://placehold.co/600x400.png",
    hint: "ui design",
  },
  {
    title: "Project Epsilon",
    category: "Branding",
    image: "https://placehold.co/600x400.png",
    hint: "branding mockup",
  },
  {
    title: "Project Zeta",
    category: "Abstract Art",
    image: "https://placehold.co/600x400.png",
    hint: "abstract art",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-accent text-accent">{project.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
