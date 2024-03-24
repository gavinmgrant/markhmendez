/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative flex flex-col items-center">
      <Navbar />

      <main className="flex min-h-[calc(100vh-76px)] items-center justify-center">
        <p className="p-6 pb-16 leading-7 md:w-[800px]">
          For Mark H Mendez, the words of T.S. Eliot ring true: "the end of all
          our exploring will be to arrive where we started and know the place
          for the first time." As a native of Venice, Mark grew up in a working
          class neighborhood with a single mother from whom he learned the value
          of hard work. Ambitious to make his mark on the world, Mendez
          matriculated to the University of Southern California, where he earned
          a degree in Architecture. Upon graduation, he began designing high-end
          residential homes throughout Los Angeles at the highly regarded firms
          Marmol Radziner and Associates and Lorcan O'Herlihy Architects.
          Throughout his experiences as an architect, Mark learned something
          about himself: as much as he enjoyed the process of designing a
          beautiful home, his true passion lie in sharing his love of great
          design with others. What started as a personal investment in the real
          estate market eventually blossomed into a hobby, and then a full-time
          pursuit with his joining of the Price + Hou team in 2015. For Mark,
          great architecture is about ensuring the design of a home complements
          its surroundings. As a realtor he takes a similar approach, helping
          match each of his clients to the home that suits their needs on an
          elemental level. By joining the team, Mark has brought his life full
          circle, returning to the Westside community that made him who he is,
          but with the depth of knowledge, skills, and commitment to help others
          find a home where he first had his.
        </p>
      </main>

      <Footer />
    </div>
  );
}
