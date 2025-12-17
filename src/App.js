import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Hero from './Pages/Hero';
import Services from './Pages/Services';
import About from './Pages/About';
import Categories from './Components/Categoriessection';
import Courses from './Pages/Courses';
import Instructors from './Pages/Instructors';
import Testimonial from './Pages/Testimonial';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <>
      {/* <Header />
      <Hero />
      <Services />
      <About />
      <Categories />
      <Courses />
      <Instructors />
      <Testimonial />
      <Footer /> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/instructors" element={<Instructors />} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/Conatct" element={<Footer />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;





// https://themewagon.github.io/elearning/index.html
