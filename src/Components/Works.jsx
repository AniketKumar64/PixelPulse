import React, { useRef } from "react";

const Works = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const cards = [
    {
      tags: ["Motion", "UI/UX", "Video"],
      title: "Luxe Glow",
      image:
        "https://cdn.prod.website-files.com/68bd68377e73b0da2a2a1aa4/68d2f7870e5327c12330a4bf_work-1-p-2000.webp",
      category: "Fashion",
      year: 2024,
    },
    {
      tags: ["Web", "App", "Brand"],
      title: "Pulse Wave",
      image:
        "https://cdn.prod.website-files.com/68bd68377e73b0da2a2a1aa4/68d2f4fc5b7588fe7028ebf6_work-2-p-2000.webp",
      category: "Media",
      year: 2023,
    },
    {
      tags: ["Brand", "Design", "UI/UX"],
      title: "Echo Blend",
      image:
        "https://cdn.prod.website-files.com/68bd68377e73b0da2a2a1aa4/68d2f4fc5b7588fe7028ebf6_work-2-p-2000.webp",
      category: "Tech",
      year: 2025,
    },
    {
      tags: ["Brand", "Design", "UI/UX"],
      title: "Echo Blend",
      image:
        "https://cdn.prod.website-files.com/68bd68377e73b0da2a2a1aa4/68d2f7870e5327c12330a4bf_work-1-p-2000.webp",
      category: "Tech",
      year: 2025,
    },
  ];

  return (
    <section ref={triggerRef} className="overflow-hidden  bg-black">
      <div
        ref={sectionRef}
        className="flex lg:p-8 p-4 my-20  flex-col mx-auto lg:max-w-[75%] min-h-screen"
      >
        <div className="w-full text-center h-full flex items-center  flex-col gap-4 bg-zinc-950 p-10">
          <p className="text-2xl text-[#d4d3d3]">
            <span>[</span> Featured
            <span>]</span>
          </p>

          <div className="flex     sm:h-fit h-full">
            <h1 className="text-3xl  md:text-5xl lg:text-8xl font-bold text-white mb-8">
              Explore <br /> Works
            </h1>
          </div>
        </div>

        {/* grid of 2*2 */}
        <div className="grid lg:grid-cols-2 text-gray-950 grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="group relative w-full h-96 md:h-[28rem] overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-140 transition-transform duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-black opacity-100 group-hover:opacity-100 duration-500 flex flex-col  text-black p-6">
                  <div className="flex flex-wrap gap-2 ">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm font-bold bg-white/90  px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="  text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-md">
                  {card.category} &mdash; {card.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
