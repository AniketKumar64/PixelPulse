import React, { useRef ,useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
        const heroref = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

    useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroref.current,
          start: "top top",
          end: "+=200%", // Scroll distance to complete the animation
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.to(imageRef.current, {
        scale: 1,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        duration: 1,
        ease: "power2.inOut"
      })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.5"); // Overlap slightly with the end of the scale

    }, heroref);

    return () => ctx.revert();
  }, []);




  return (
      <section ref={heroref} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Initial State: Centered, smaller image with border radius */}
      <div
        ref={imageRef}
        className="relative w-[40vw] h-[50vh] overflow-hidden rounded-2xl shadow-2xl z-10"
        style={{ transformOrigin: 'center center' }} // Ensure scaling from center
      >
        <img
src="https://wallpaperaccess.com/full/4050056.jpg"        
  alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>



  <section  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-h-[50vh] bg-black text-white flex items-center justify-center  z-10 text-center">
    <div className="lg:w-[85%] md:w-full  mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

      <div ref={textRef} className="font-bold uppercase px-4 leading-17 lg:leading-22 tracking-tight select-none">
        <h1 className="lg:text-[7rem] md:text-[5rem] font-bold text-[4.1rem]">
          <span className="relative right-[3vw] lg:left-[3vw]">Design</span>
        </h1>
      <div className="relative left-[4vw] ">
          <h1 className="lg:text-[7rem] md:text-[5rem] text-right font-bold text-[4.1rem]">Studio</h1>
        <h1 className="lg:text-[7rem] md:text-[5rem] text-right font-bold text-[4.1rem]">In</h1>
        <h1 className="lg:text-[7rem] md:text-[5rem] text-right font-bold text-[4.1rem]">Dubai</h1>
      </div>
      </div>

      <div className="flex flex-col justify-between max-h-[50vh] items-end  text-right space-y-4 text-gray-300">
        <p className="lg:w-[50%] w-[90%] text-right  text-[19px] lg:text-lg">
          At Cixo Studio, we offer services including <br /> Branding, Web Design,
          Web Development, and Motion Graphics too!
        </p>

        <button className="flex items-center gap-3 lg:gap-10 px-4 py-2 transition">
          <div className="group relative h-10 w-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer">
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white"></span>

            <span className="text-white text-lg lg:text-2xl transform transition-all duration-300 group-hover:translate-x-2">
              ➜
            </span>
          </div>

          <p className="text-white text-xl lg:text-3xl">Explore More</p>
        </button>
      </div>

    </div>
  </section>
</section>


  )
}

export default Hero