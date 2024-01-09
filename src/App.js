import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FunFact from "./components/FunFact";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import PointOfSale from "./components/PointOfSale";
import Pricing from "./components/Pricing";
import Retail from "./components/Retail";
import Testimonials from "./components/Testimonials";
// 1. Import the utilities

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Inventory />
      <About />
      <FunFact />
      <Features />
      <Pricing />
      <Retail />
      <FAQs />
      <Clients />
      <Testimonials />
      <PointOfSale />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
