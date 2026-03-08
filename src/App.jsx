import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
// import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import FixedWhatsappButton from "./components/FixedWhatsappButton";

function App() {
  return (
    <>
      <Hero />
      <Products />
      <WhyChooseUs />
      {/* <HowToOrder /> */}
      <Testimonials />
      <About />
      <Contact />
      <FixedWhatsappButton />
      <Footer />
    </>
  );
}

export default App;
