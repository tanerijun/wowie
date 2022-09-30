import Image from "next/future/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  setQuery?: Dispatch<SetStateAction<string>>;
  title?: string;
};

export default function Header({ setQuery, title }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogoClick = () => {
    setSearchQuery("");
    if (setQuery) setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full bg-zinc-900 bg-opacity-70 backdrop-blur-md">
      <div
        className="m-auto flex h-full w-full max-w-7xl items-center px-4"
        onClick={handleLogoClick}
      >
        <Link href="/">
          <a>
            <div>
              <span className="text-3xl tracking-widest text-gray-50">
                WOWIE
              </span>
            </div>
          </a>
        </Link>

        <div className="relative flex flex-1 items-center justify-end">
          {setQuery && (
            <SearchInput
              setQuery={setQuery}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}
          {title && <Breadcrumb title={title} />}
        </div>
      </div>
    </header>
  );
}
