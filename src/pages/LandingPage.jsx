import React from 'react';
import Hero from '../components/organisms/Hero';
import Features from '../components/organisms/Features';
import HowItWorks from '../components/organisms/HowItWorks';
import Testimonial from '../components/organisms/Testimonial';
import FAQ from '../components/organisms/FAQ';
import CTA from '../components/organisms/CTA';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
};

export default LandingPage;
