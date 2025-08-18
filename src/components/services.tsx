import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Gem, Box, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description: "Creating visually compelling graphics for digital and print media, from logos to marketing materials.",
    icon: <Palette className="w-12 h-12 text-accent" />,
  },
  {
    title: "Branding",
    description: "Developing strong, consistent brand identities that resonate with your target audience and build recognition.",
    icon: <Gem className="w-12 h-12 text-accent" />,
  },
  {
    title: "3D Visualization",
    description: "Bringing concepts to life with realistic 3D models and renders, perfect for product showcases.",
    icon: <Box className="w-12 h-12 text-accent" />,
  },
  {
    title: "Web UI Mockups",
    description: "Designing intuitive and beautiful user interfaces for websites and applications that are a joy to use.",
    icon: <MonitorSmartphone className="w-12 h-12 text-accent" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card border-border hover:border-accent transition-colors duration-300 flex flex-col">
              <CardHeader className="flex-grow">
                <div className="mx-auto w-fit mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-semibold font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
