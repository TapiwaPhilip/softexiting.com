
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Benefits = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).classList.add('opacity-100', 'translate-y-0');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: "Preserve Your Entrepreneurial Narrative",
      description: "Transform what could be seen as a failure into a strategic exit, maintaining a positive career trajectory.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
          <path d="M10 9H8"></path>
        </svg>
      ),
    },
    {
      title: "Clean CV Exit",
      description: "Add a successful exit to your résumé, enhancing your credibility with investors and employers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
    },
    {
      title: "Dignified Closure",
      description: "Close your startup chapter with dignity and professionalism, ready to move forward.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      ),
    },
    {
      title: "Valuable Network",
      description: "Join our community of resilient entrepreneurs who have navigated similar challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Future Investor Confidence",
      description: "Demonstrate to future investors that you know how to responsibly end a venture when needed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
    },
    {
      title: "Legal Simplicity",
      description: "Navigate the closure process with minimal legal complexity and paperwork.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4c0-.5.5-1 1-1h10c.5 0 1 .5 1 1v18"></path>
          <path d="M2 22h20"></path>
          <path d="M12 13V7"></path>
          <path d="m9 10 3 3 3-3"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Founder Benefits
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose StartupSalvage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've helped hundreds of founders transform their failed startups into successful exits. Here's how you benefit.
          </p>
        </div>

        <div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "benefit-card glass-panel rounded-xl p-6 opacity-0 translate-y-8 transition-all duration-500 ease-out",
                "hover:shadow-subtle hover:translate-y-[-5px] transition-all duration-300"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-panel rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">We Believe in Second Chances</h3>
            <p className="text-muted-foreground mb-6">
              Startup failure is a common step on the entrepreneurial journey. We're here to help you frame this chapter as a strategic decision rather than a defeat.
            </p>
            <div className="text-center">
              <a 
                href="#apply" 
                className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 button-hover-effect"
              >
                Apply for Your Acquisition
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
