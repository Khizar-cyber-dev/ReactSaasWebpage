import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItsWork from './components/HowItsWork';
import KeyFeatures from './components/KeyFeatures';
import PricingPlan from './components/PricingPlan';
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowItsWork />
      <KeyFeatures />
      <PricingPlan />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
