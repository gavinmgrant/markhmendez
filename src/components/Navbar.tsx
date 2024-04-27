import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative flex h-[72px] w-full items-center justify-end p-6">
      <Link
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        href="/"
      >
        <h1 className="w-screen text-center text-base font-semibold tracking-widest sm:w-[400px] sm:text-xl lg:text-2xl">
          MARK H MENDEZ GROUP
        </h1>
      </Link>

      <nav>
        <ul className="hidden items-center gap-2 text-sm sm:flex sm:text-base">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
