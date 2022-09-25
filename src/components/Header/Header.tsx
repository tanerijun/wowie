import Image from "next/future/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  setQuery?: Dispatch<SetStateAction<string>>;
};

export default function Header({ setQuery }: Props) {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-full bg-zinc-900">
      <div className="m-auto flex h-full w-full max-w-7xl items-center px-4">
        <Link href="/">
          <a>
            <Image
              width={150}
              height={50}
              className="hidden md:block"
              src="/site-logo.svg"
              alt="logo"
              priority
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image
              width={50}
              height={50}
              className="md:hidden"
              src="/site-logo-small.svg"
              alt="small logo"
              priority
            />
          </a>
        </Link>
        {setQuery && (
          <div className="relative flex flex-1 items-center justify-end">
            <SearchInput setQuery={setQuery} />
          </div>
        )}
      </div>
    </header>
  );
}
