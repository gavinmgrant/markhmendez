import InlineFlodeskForm from "@/components/InlineFlodeskForm";
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandTiktok,
  TbMinusVertical,
  TbMail,
} from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <InlineFlodeskForm />

      <div className="block w-full px-6 pt-16 pb-6">
        <div className="flex items-center justify-center gap-4 pb-6 text-center text-xs sm:gap-6">
          <a
            href="https://www.linkedin.com/in/markhmendez/"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin className="h-7 w-7 transition duration-250 hover:scale-105 hover:text-neutral-900 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://www.instagram.com/markhmendez/"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandInstagram className="h-7 w-7 transition duration-250 hover:scale-105 hover:text-neutral-900 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://www.tiktok.com/@markhmendez/"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandTiktok className="h-7 w-7 transition duration-250 hover:scale-105 hover:text-neutral-900 sm:h-8 sm:w-8" />
          </a>
          <a href="mailto:mark.mendez@compass.com">
            <TbMail className="h-7 w-7 transition duration-250 hover:scale-105 hover:text-neutral-900 sm:h-8 sm:w-8" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-center text-xs sm:flex-row sm:gap-2">
          <p className="flex items-center gap-2">
            <a
              className="transition duration-250 hover:scale-105 hover:text-neutral-900"
              href="https://www.compass.com/agents/mark-mendez/"
              target="_blank"
              rel="noreferrer"
            >
              Compass
            </a>
            <TbMinusVertical className="h-4 w-4" />
            <span>DRE# 01974201</span>
          </p>
          <TbMinusVertical className="hidden h-4 w-4 sm:block" />
          <p>&copy; {currentYear} Mark Mendez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
