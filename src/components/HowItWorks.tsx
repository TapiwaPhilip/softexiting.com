
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step-item');
            steps.forEach((step, index) => {
              setTimeout(() => {
                (step as HTMLElement).classList.add('opacity-100', 'translate-y-0');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Complete Application',
      description: 'Fill out our simple application form with details about your startup and your journey.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Verification Process',
      description: 'Our team reviews your application and verifies your startup details within 48 hours.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Acquisition Agreement',
      description: 'We prepare and send you a simple acquisition agreement for your review and signature.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Symbolic Payment',
      description: 'We transfer the symbolic 1€ payment, officially completing the acquisition process.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Official Documentation',
      description: 'Receive your official acquisition documentation for your portfolio and résumé.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-background">
      {/* Background Element */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Simple 5-Step Process
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            How StartupSalvage Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've designed a seamless, dignified process to transform your startup's end into a strategic exit.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "step-item flex items-start mb-12 opacity-0 translate-y-8 transition-all duration-500 ease-out",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"
              )}
            >
              {/* Line Connector */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute h-16 w-px bg-primary/20",
                    index % 2 === 0 
                      ? "left-[43px] top-[70px]" 
                      : "right-[43px] top-[70px]"
                  )}
                  style={{
                    marginLeft: index % 2 === 0 ? '0' : 'auto',
                    marginRight: index % 2 === 1 ? '0' : 'auto',
                  }}
                ></div>
              )}

              {/* Step Number and Icon */}
              <div className={cn(
                "relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center shadow-subtle border border-primary/10",
                index % 2 === 0 ? "mr-8" : "ml-8"
              )}>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number.split('')[1]}
                </div>
                <div className="text-primary">{step.icon}</div>
              </div>

              {/* Step Content */}
              <div className={cn(
                "flex-grow pt-2",
                index % 2 === 0 ? "pr-4" : "pl-4"
              )}>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#apply" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ready to start your acquisition process?
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
