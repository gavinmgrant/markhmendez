import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between p-6">
      <Link href="/">
        <h1 className="text-base font-semibold tracking-widest sm:text-xl">
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
