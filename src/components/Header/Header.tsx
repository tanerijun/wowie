import Image from "next/future/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  setQuery?: Dispatch<SetStateAction<string>>;
  title?: string;
  logoLink: string;
};

export default function Header({ setQuery, title, logoLink }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogoClick = () => {
    setSearchQuery("");
    if (setQuery) setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full bg-tmdb-primary-color bg-opacity-80 backdrop-blur-md">
      <div
        className="m-auto flex h-full w-full max-w-7xl items-center px-4"
        onClick={handleLogoClick}
      >
        <Link href={`${logoLink}`}>
          <a>
            <div>
              <span className="bg-gradient-to-r from-tmdb-secondary-color to-tmdb-tetriary-color bg-clip-text text-3xl tracking-widest text-transparent">
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
