/* eslint-disable react/no-unescaped-entities */
"use client";

import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  const title = "Mark H Mendez";
  const description =
    "Los Angeles Realtor with a focus on selling architectural homes";

  return (
    <div className="relative flex flex-col items-center">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/img/markhmendez.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar />

      <main className="flex items-center justify-center px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <div className="sm:h-[480px] sm:w-[480px] lg:h-[540px] lg:w-[540px] ">
            <Image
              className="fade-in"
              src="/img/markhmendez.jpeg"
              width={600}
              height={600}
              alt={title}
              priority={true}
            />
          </div>
          <div className="fade-in space-y-1 overflow-hidden text-center text-sm sm:text-left sm:text-base lg:text-lg">
            <p className="fade-in-up">{description}</p>
          </div>
        </div>
      </main>

      <Reviews />

      <Footer />
    </div>
  );
}
