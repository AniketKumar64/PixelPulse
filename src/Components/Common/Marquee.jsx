import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Marquee({
  children,
  speed = 20,
  direction = "left",
  className = "",
}) {
  const trackRef = useRef(null);

  useGSAP(() => {
    const el = trackRef.current;

    gsap.fromTo(
      el,
      {
        xPercent: direction === "left" ? 0 : -50,
      },
      {
        xPercent: direction === "left" ? -50 : 0,
        duration: speed,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className={`flex w-max  ${className}`}>
        {/* Duplicate children for loop */}
        <div className="flex gap-5">{children}</div>
        <div className="flex gap-5">{children}</div>
          <div className="flex gap-5">{children}</div>
        <div className="flex gap-5">{children}</div>
          <div className="flex gap-5">{children}</div>
        <div className="flex gap-5">{children}</div>
      </div>
    </div>
  );
}
