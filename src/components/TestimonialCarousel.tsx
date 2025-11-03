import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Inc.",
    text: "MorAssist transformed our online presence completely. Their attention to detail and strategic approach resulted in a 300% increase in our online engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Green Solutions LLC",
    text: "Working with MorAssist was a game-changer for our business. They delivered beyond expectations and our website now perfectly represents our brand.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studios",
    text: "The team at MorAssist is incredibly professional and creative. They took our vision and turned it into a stunning reality that drives real results.",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-card border-brand-blue/20">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-brand-blue/30 mb-6" />
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-lg">{testimonials[current].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].role} at {testimonials[current].company}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-brand-blue" : "w-2 bg-muted"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
