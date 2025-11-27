import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Branding<br>Strategy",
    description:
      "Elevate your identity with tailored branding that resonates and inspires trust. Our strategic approach strengthens your market presence effectively.",
    image:
      "https://cdn.prod.website-files.com/68a23a173b72d0cb9fe93ba1/68af13a19c03ee15825d4322_c1d34c90cb44a4d4ecb328e24305dd92_service-2-p-2000.webp",
  },
  {
    id: 2,
    title: "Website<br>Design",
    description:
      "Create stunning websites that captivate with sleek, user-focused designs and layouts. Our expert team can enhance your online appeal seamlessly.",
    image:
      "https://cdn.prod.website-files.com/68a23a173b72d0cb9fe93ba1/68af13a1f49b874e4c1c2964_267dacbd3db6092cdaa66f4af48e12ef_service-1-p-2000.webp",
  },
  {
    id: 3,
    title: "Web<br>Development",
    description:
      "Develop robust websites with cutting-edge technology and flawless functionality. Our experts ensure optimal performance for a superior digital experience.",
    image:
      "https://cdn.prod.website-files.com/68a23a173b72d0cb9fe93ba1/68af13a16ece94964655b7e5_11934ee0b7baee96ffae6bab86cf7f0b_service-4-p-2000.webp",
  },
  {
    id: 4,
    title: "Motion<br>Graphics",
    description:
      "Bring stories to life with dynamic motion graphics that engage and impress viewers. Our creative process delivers high-quality animations that make impact.",
    image:
      "https://cdn.prod.website-files.com/68a23a173b72d0cb9fe93ba1/68af13a1f49b874e4c1c2964_267dacbd3db6092cdaa66f4af48e12ef_service-1-p-2000.webp",
  },
];

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const totalWidth =
        sectionRef.current.scrollWidth - document.documentElement.clientWidth;

      gsap.to(sectionRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden bg-black">
      <div
        ref={sectionRef}
        className="flex lg:p-8 p-4 md:my-20 mx-auto lg:max-w-[75%] h-screen w-fit"
      >
        <div className="w-screen h-full flex flex-col gap-4 bg-zinc-950 md:p-10">
          <p className="text-2xl text-[#d4d3d3]">
            <span>[</span> Services <span>]</span>
          </p>

          <div className="flex flex-col justify-center sm:h-fit h-full">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-8">
              The Top <br /> Services <br /> We Do
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              Our agency offers a range of top-notch services designed to elevate
              your brand and digital presence.
            </p>
          </div>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen md:w-[50vw] lg:w-[30vw] h-full flex items-center justify-center flex-shrink-0 bg-black border-l border-zinc-800"
          >
            <div className="relative group h-full max-h-full overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-[90%] mx-auto h-full border border-gray-800 group-hover:opacity-100 opacity-0 object-cover transition-transform ease-in-out duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-10">
                <span className="text-8xl">{project.id}</span>

                <div className="flex justify-between items-end">
                  <h3
                    className="text-4xl md:text-7xl font-bold text-white"
                    dangerouslySetInnerHTML={{ __html: project.title }}
                  />
                </div>

                <p className="text-gray-300 mt-4 max-w-xl">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
