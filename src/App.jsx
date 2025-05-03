import React from 'react';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import CTABanner from './component/CTABanner/CTABanner';
import FAQ from './component/FAQ/FAQ';
import Footer from './component/Footer/Footer';
import Gallery from './component/Gallery/Gallery';
import Newsletter from './component/Newsletter/Newsletter';
import ServiceProcess from './component/ServiceProcess/ServiceProcess';
import Services from './component/Services/Services';
import Stats from './component/Stats/Stats';
import Team from './component/Team/Team';
import Testimonials from './component/Testimonials/Testimonials';
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <>
      <Header />
        <Hero />
        <Services />
        <About />
        <ServiceProcess />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <Gallery />
        <Team />
        <CTABanner />
        <FAQ/>
        <Newsletter />
        <Contact />
      <Footer />
    </>
  );
}

export default App;
