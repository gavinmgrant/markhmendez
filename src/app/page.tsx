/* eslint-disable react/no-unescaped-entities */
"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const title = "Mark H Mendez";
  const description =
    "Los Angeles Realtor with a focus on Selling Architectural Homes";

  return (
    <div className="relative flex flex-col items-center">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/img/markhmendez.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      <Navbar />

      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-6 pb-6 sm:min-h-[calc(100vh-76px)]">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <Image
            src="/img/markhmendez.jpeg"
            width={400}
            height={400}
            alt={title}
            priority={true}
          />
          <div className="space-y-1 text-center text-sm sm:text-left sm:text-lg">
            <p>{description}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
