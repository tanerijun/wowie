import Image from "next/future/image";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";

type Props = {
  setQuery: Dispatch<SetStateAction<string>>;
};

export default function SearchInput({ setQuery }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const timer = useRef<NodeJS.Timeout>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setQuery(e.target.value);
    }, 300);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        value={searchQuery}
        placeholder="Search Movie"
        className="text-md h-10 rounded-full bg-zinc-700 p-4 pr-14 text-white focus:border focus:border-solid focus:border-cyan-200 focus:outline-none md:w-96"
      />
      <div className="absolute right-4">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="TMBD Logo" />
      </div>
    </>
  );
}
