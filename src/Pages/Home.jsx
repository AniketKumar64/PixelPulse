
import About from "../Components/About";
import Contact from "../Components/Common/Contact";
import Footer from "../Components/Common/Footer";
import Hero1 from "../Components/Common/Hero1";
import Projects from "../Components/Projects";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import Works from "../Components/Works";




const Home = () => {

  return (
   <div className="relative">
    <Hero1/>
    {/* <Hero /> */}
    <About />
    <Projects/>
    <Works />
    <Reviews/>
    <Services/>
    
    <Contact/>
    <Footer/>


   </div>
  )
}

export default Home
