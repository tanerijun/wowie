import Image from "next/future/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-24 w-full bg-zinc-900">
      <div className="m-auto flex h-full w-full max-w-7xl px-4">
        <Link href="/">
          <Image
            width={150}
            height={50}
            className="hidden md:block"
            src="/site-logo.svg"
            alt="logo"
          />
        </Link>
        <Link href="/">
          <Image
            width={50}
            height={50}
            className="md:hidden"
            src="/site-logo-small.svg"
            alt="small logo"
          />
        </Link>
      </div>
    </header>
  );
}
