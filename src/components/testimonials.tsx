import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, Tech Innovators",
    quote: "Working with them was an absolute pleasure. Their creativity and professionalism are unmatched. The final designs exceeded all our expectations.",
    avatar: "AJ",
    image: "https://placehold.co/100x100.png",
    hint: "person portrait"
  },
  {
    name: "Samantha Lee",
    title: "Marketing Director, Creative Co.",
    quote: "The branding they developed for us has been a game-changer. Our market presence has never been stronger. Highly recommended!",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    hint: "person portrait"
  },
  {
    name: "Michael Chen",
    title: "Lead Developer, AppWorks",
    quote: "The UI mockups were not only beautiful but also incredibly intuitive. It made the development process so much smoother. A true professional.",
    avatar: "MC",
    image: "https://placehold.co/100x100.png",
    hint: "person portrait"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline">What Others Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 bg-card border-border">
                    <div>
                      <Quote className="w-10 h-10 text-accent mb-4" />
                      <p className="text-foreground/80 text-lg italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center mt-6">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-accent" />
          <CarouselNext className="text-accent" />
        </Carousel>
      </div>
    </section>
  );
}
