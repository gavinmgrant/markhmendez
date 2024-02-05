"use client"

import { motion } from "framer-motion"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-center font-semibold flex items-center tracking-wider">
          <motion.div
            className="z-10 bg-neutral-300 p-2"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
          >
            MARK H MENDEZ
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.25  }}
          >
            GROUP
          </motion.div>
        </h1>
      </main>

      <Footer />
    </div>
  )
}
