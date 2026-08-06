"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CanvasCursor from "@/components/CanvasCursor";
import useHasMouse from "@/hooks/useHasMouse";

export default function Home() {
  const hasMouse = useHasMouse();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
      {hasMouse && <CanvasCursor />}
    </>
  );
}
