
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Helmet>
        <title>About StartupSalvage - Turn Failure Into Opportunity</title>
        <meta name="description" content="Learn how StartupSalvage helps founders exit their failed startups gracefully and turn failure into opportunity. Sell your startup for as little as €1." />
        <meta name="keywords" content="about startup salvage, failed startup exit, startup acquisition, entrepreneur second chance" />
        <link rel="canonical" href="https://startupsalvage.com/about" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background/10 -z-10" aria-hidden="true"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" aria-hidden="true"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Turn Failure Into Opportunity
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Entrepreneurship is tough, and not every startup makes it. But failure shouldn't define your future. 
                  What if you could exit gracefully, instead of just shutting down?
                </p>
                
                {/* Main content with animation */}
                <div className="bg-card rounded-xl p-8 shadow-subtle border border-border/50 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Introducing StartupSalvage</h2>
                  
                  <p className="mb-6 text-foreground/90">
                    The platform where founders can sell their failed startups— even for as little as €1— and move forward with a successful exit on their record. 
                    No more stigma, no more loose ends. Whether it's a struggling SaaS, an unfinished marketplace, or a side project that didn't take off, 
                    we help you transition and give your startup a second life.
                  </p>
                  
                  {/* Benefits section with animated entrance */}
                  <div className="mt-10 space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                      <span className="inline-block mr-2 bg-primary/10 p-1.5 rounded-full">
                        <span className="text-primary text-lg">🚀</span>
                      </span>
                      Why it matters:
                    </h3>
                    
                    <ul className="space-y-4">
                      {[
                        "Frame your startup journey as an exit, not a failure",
                        "Retain credibility for future ventures or job applications",
                        "Find buyers who might pivot or revive your idea",
                        "Close the chapter with confidence and start fresh"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                          <div className="mr-3 mt-1">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA section */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                  <p className="text-xl font-medium mb-6 text-foreground">
                    Don't let your hard work go to waste—turn it into an opportunity.
                  </p>
                  
                  <Button size="lg" className="group button-hover-effect bg-primary hover:bg-primary/90 transition-all duration-300 text-white py-6 px-8 text-lg">
                    List your startup today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
