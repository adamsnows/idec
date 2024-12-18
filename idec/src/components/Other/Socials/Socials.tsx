"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Socials = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center xl:gap-x-5 gap-x-3 text-lg font-thin ">
      <button
        onClick={() => handleClick("about")}
        className="hover:text-accent transition-all duration-300"
        aria-label={"buttonedin"}
      >
        SOBRE
      </button>
      <button
        onClick={() => handleClick("formation")}
        className="hover:text-accent transition-all duration-300"
        aria-label={"instagram"}
      >
        FORMAÇÕES
      </button>
      <button
        onClick={() => handleClick("unity")}
        className="hover:text-accent transition-all duration-300"
        aria-label={"whatsapp"}
      >
        UNIDADES
      </button>
      <button
        onClick={() => handleClick("contact")}
        className="hover:text-accent transition-all duration-300"
        aria-label={"email"}
      >
        CONTATO
      </button>
    </div>
  );
};

export default Socials;
