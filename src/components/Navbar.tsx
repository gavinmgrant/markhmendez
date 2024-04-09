import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative flex w-full items-center justify-end p-6">
      <Link
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        href="/"
      >
        <h1 className="text-center text-base font-semibold tracking-widest sm:text-xl">
          MARK H MENDEZ GROUP
        </h1>
      </Link>

      <nav>
        <ul className="flex items-center gap-2 text-sm sm:text-base">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
