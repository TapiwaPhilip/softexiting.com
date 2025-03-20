import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      const moveX = x * 20 - 10;
      const moveY = y * 20 - 10;
      const overlay = heroRef.current.querySelector('.hero-gradient') as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section ref={heroRef} className="min-h-screen pt-28 pb-20 flex items-center relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="hero-gradient absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-3xl opacity-70 transition-transform duration-300 ease-out" aria-hidden="true"></div>
      <div className="absolute -bottom-[200px] -left-[200px] w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Symbolic 1€ Asset Acquisitions for Failed Startups</span>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <span className="block">A Dignified Exit for</span>
            <span className="block text-primary">Your Startup Journey</span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            Transform a failed venture into a successful exit on your résumé. We provide founders with a symbolic acquisition, preserving your entrepreneurial narrative.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button size="lg" asChild className="button-hover-effect group">
              <a href="#apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">Learn How It Works</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-20 glass-panel rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-subtle animate-fade-in-up" style={{
        animationDelay: '1s'
      }}>
          <h2 className="text-lg font-semibold text-foreground">Why Founders Choose Us</h2>
          <ul className="mt-4 grid gap-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="ml-3 text-sm text-muted-foreground">Maintain the narrative of a successful exit for your professional journey</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="ml-3 text-sm text-muted-foreground">Simple, dignified process with minimal paperwork</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="ml-3 text-sm text-muted-foreground">Join a community of resilient entrepreneurs who have pivoted from failure to future success</p>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2">Scroll to learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>;
};
export default Hero;