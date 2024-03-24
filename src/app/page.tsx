/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <Navbar />

      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6 pb-6 sm:min-h-[calc(100vh-76px)]">
        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <Image
            src="/img/markhmendez.jpeg"
            width={400}
            height={400}
            alt="Mark H Mendez"
            priority={true}
          />
          <div className="space-y-1 text-sm sm:text-lg">
            <p>Los Angeles Realtor</p>
            <p>Buyer's agent specializing in architectural homes</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
