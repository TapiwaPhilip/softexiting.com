
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "After 18 months and exhausting our runway, we were facing difficult conversations with our team and investors. StartupSalvage provided a dignified exit that allowed me to frame the experience positively. I've since secured funding for my new venture.",
      author: "Elena K.",
      role: "Former CEO, FinTech Startup",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      quote: "When our EdTech startup didn't find product-market fit, I was devastated. The symbolic acquisition from StartupSalvage allowed me to tell a different story in job interviews. Instead of explaining a failure, I could discuss an exit strategy.",
      author: "Michael R.",
      role: "Co-founder, EdTech Startup",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      quote: "The VCs we approached were concerned about my previous startup closing down. After completing the StartupSalvage process, I could position it as an acquisition, which completely changed the conversation. We secured our seed round within months.",
      author: "Sarah J.",
      role: "Serial Entrepreneur",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
  ];

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Element */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"
        style={{ transform: 'translate(30%, -30%)' }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-70 -z-10"
        style={{ transform: 'translate(-30%, 30%)' }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Success Stories
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            From Our Entrepreneurs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from founders who have transformed their startup endings into new beginnings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel rounded-2xl p-8 sm:p-10 shadow-subtle relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={64} />
            </div>

            <div className="relative z-10">
              <div className="min-h-[200px] flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute w-full transition-all duration-500 ease-in-out",
                      index === activeIndex 
                        ? "opacity-100 translate-x-0" 
                        : index < activeIndex 
                          ? "opacity-0 -translate-x-full" 
                          : "opacity-0 translate-x-full"
                    )}
                  >
                    <blockquote className="text-lg sm:text-xl text-foreground italic text-center mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button 
                size="icon" 
                variant="outline" 
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                )}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-foreground">
            Join hundreds of entrepreneurs who have successfully pivoted from failure to future opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
