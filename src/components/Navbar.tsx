import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative flex h-[60px] w-full items-center justify-between p-4 sm:h-[72px] sm:p-6">
      <Link href="/">
        <h1 className="text-sm font-semibold tracking-widest sm:w-[400px] sm:text-lg md:text-xl lg:text-2xl">
          MARK H MENDEZ GROUP
        </h1>
      </Link>

      <div className="flex items-center sm:gap-6">
        <a
          className="shrink-0 rounded px-2 py-1 text-sm font-medium outline outline-1 sm:px-3 sm:text-base"
          href="tel:310-621-2531"
        >
          310-621-2531
        </a>
        <nav>
          <ul className="hidden items-center gap-2 text-sm sm:flex sm:text-base">
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
