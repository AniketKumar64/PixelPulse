import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    const el = footerRef.current;

    gsap.from(el.querySelectorAll(".fade-item"), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-24 px-6 md:px-20 border-t border-zinc-800"
    >
      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Message */}
        <div className="fade-item space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            PixelPulse Studio
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            PixelPulse Studio crafts bold digital experiences blending design, motion,
            and development into memorable, high-impact results.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="hover:text-cyan-400 transition fade-item">
              {/* <Instagram className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-cyan-400 transition fade-item">
              {/* <Dribbble className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-cyan-400 transition fade-item">
              {/* <Behance className="w-6 h-6" /> */}
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="fade-item">
          <h3 className="text-lg font-semibold mb-4 tracking-tight">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Studio</li>
            <li className="hover:text-white transition cursor-pointer">Work</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Hello */}
        <div className="fade-item">
          <h3 className="text-lg font-semibold mb-4 tracking-tight">Hello</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              info@PixelPulse.studio
            </li>
            <li className="leading-relaxed">
              Suite 408, Alserkal Avenue,
              <br /> Al Quoz 1, Dubai, UAE.
            </li>
          </ul>
        </div>

        {/* Utility */}
        <div className="fade-item">
          <h3 className="text-lg font-semibold mb-4 tracking-tight">Utility</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Style Guide</li>
            <li className="hover:text-white transition cursor-pointer">Licenses</li>
            <li className="hover:text-white transition cursor-pointer">Changelog</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm fade-item">
        © {new Date().getFullYear()} Aniket Kumar— All Rights Reserved.
      </div>
    </footer>
  );
}
