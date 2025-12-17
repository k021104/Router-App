import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Testimonial from './Pages/Testimonial';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Ourteam from './Pages/Ourteam';
import Contact from './Pages/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, []);


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;





// https://themewagon.github.io/elearning/index.html
