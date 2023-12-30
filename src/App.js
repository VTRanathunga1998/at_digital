import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
