import React from "react";

export default function HeroMarquee() {
  const items = [
    "Branding",
    "Web Design",
    "Web Development",
    "Motion Graphics",
    "UI/UX",
    "Animation",
    "Photography",
    "Illustration",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <section className="relative h-screen bg-black">
      <section className="absolute w-full min-h-[50vh] bg-black text-white flex items-center justify-center p-8 bottom-0 left-1/2 -translate-x-1/2 z-10 text-center">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="font-bold uppercase leading-22 tracking-tight select-none">
            <h1 className="md:text-[7rem] text-[4.1rem]">
              <span className="relative left-[3vw]">Design</span>
            </h1>
            <h1 className="md:text-[7rem] text-right text-[4.1rem]">Studio</h1>
            <h1 className="md:text-[7rem] text-right text-[4.1rem]">In</h1>
            <h1 className="md:text-[7rem] text-right text-[4.1rem]">Dubai</h1>
          </div>
          <div className="flex flex-col justify-around items-end min-h-[50vh] text-right space-y-4 text-gray-300">
            <p className="w-[50%] text-right text-lg">
              At Cixo Studio, we offer services including Branding, Web Design,
              Web Development, and Motion Graphics too!
            </p>
            <button className="flex items-center gap-10 px-4 py-2 transition">
              <div className="group relative w-12 h-12 flex items-center justify-center cursor-pointer">
                <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></span>
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></span>
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></span>
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></span>
                <span className="text-white text-2xl transform transition-all duration-300 group-hover:translate-x-2">
                  ➜
                </span>
              </div>
              <p className="text-white text-3xl">Explore More</p>
            </button>
          </div>
        </div>
      </section>

      <div className="absolute inset-x-0 bottom-8 z-20">
        <div className="mx-auto w-[92%]">
          <div className="relative overflow-hidden">
            <div className="marquee flex gap-6 will-change-transform">
              {repeated.map((text, i) => (
                <div
                  key={i}
                  className="min-w-[220px] h-[120px] flex items-center justify-center rounded-2xl border border-neutral-800 text-white/90 text-xl select-none"
                >
                  {text}
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-1/6 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-1/6 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-30 pointer-events-none">
        <div className="mx-auto w-[92%]">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1/6" style={{background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)", filter: "blur(8px)"}} />
            <div className="absolute right-0 top-0 bottom-0 w-1/6" style={{background: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)", filter: "blur(8px)"}} />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 z-40">
        <div className="title text-white text-2xl"><span>[</span>About us<span>]</span></div>
      </div>

      <style>{`
        .marquee {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
          transform: translate3d(0,0,0);
          animation: scroll-marquee linear infinite;
          animation-duration: 28s;
        }
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
