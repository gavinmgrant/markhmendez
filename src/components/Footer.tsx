import { motion } from "framer-motion"
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandTiktok,
  TbMinusVertical,
} from "react-icons/tb"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute bottom-4 px-4">
      <motion.div
        className="pb-6 text-center text-xs flex items-center justify-center gap-3 sm:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.25, duration: 0.5 }}
      >
        <a
          href="https://www.linkedin.com/in/markhmendez/"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandLinkedin className="w-7 h-7 sm:w-8 sm:h-8 hover:text-black hover:scale-105 transition duration-250" />
        </a>
        <a
          href="https://www.instagram.com/markhmendez/"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandInstagram className="w-7 h-7 sm:w-8 sm:h-8 hover:text-black hover:scale-105 transition duration-250" />
        </a>
        <a
          href="https://www.tiktok.com/@markhmendez/"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandTiktok className="w-7 h-7 sm:w-8 sm:h-8 hover:text-black hover:scale-105 transition duration-250" />
        </a>
      </motion.div>
      <motion.div
        className="text-center sm:flex-row flex-col text-xs flex items-center justify-center gap-1 sm:gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <p className="flex items-center gap-2">
          <a
            className="hover:text-black hover:scale-105 transition duration-250"
            href="https://www.compass.com/agents/mark-mendez/"
            target="_blank"
            rel="noreferrer"
          >
            Compass
          </a>
          <TbMinusVertical className="h-4 w-4" />
          <span>DRE# 01974201</span>
        </p>
        <TbMinusVertical className="h-4 w-4 hidden sm:block" />
        <p>&copy; {currentYear} Mark Mendez. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

export default Footer
