import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
