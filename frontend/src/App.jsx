import React, { useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import Services from './component/Services/Services';
import CarList from './component/CarList/CarList';
import Testimonial from './component/Testimonial/Testimonial';
import AppStoreBanner from './component/AppStoreBanner/AppStoreBanner';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () =>{

  //Dark Mode Feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")?
    localStorage.getItem("theme"): "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
   },[theme]);

  //  AOS Initialization 
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
      <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero theme={theme}/>
        <About/>
        <Services/>
        <CarList/>
        <Testimonial/>
        <AppStoreBanner/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
