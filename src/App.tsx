import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
