import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import ApplicationForm from '@/components/ApplicationForm';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Smooth scroll to anchors
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Lazy load images with blur effect
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.classList.add('loaded');
              imgObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '100px' }
    );

    const lazyImages = document.querySelectorAll('img.img-blur-in');
    lazyImages.forEach((img) => imgObserver.observe(img));

    return () => {
      lazyImages.forEach((img) => imgObserver.unobserve(img));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Helmet>
        <title>StartupSalvage - Turn Your Failed Startup Into an Exit</title>
        <meta name="description" content="Sell your failed startup for as little as €1 and turn failure into an exit. StartupSalvage helps founders exit gracefully and move forward with confidence." />
        <meta name="keywords" content="startup exit, failed startup, sell startup, startup acquisition, entrepreneur exit" />
        <link rel="canonical" href="https://startupsalvage.com/" />
        <meta name="google-site-verification" content="AN60Zb6eNzt0DYrFF4v4GllD3jiOS-BUp_luUJVJG0o" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
