import Image from "next/future/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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
        placeholder="Search ..."
        className="text-md h-10 border-b border-slate-400 bg-transparent p-4 pr-14 text-gray-50 caret-gray-50 placeholder:text-slate-400 focus:border-cyan-200 focus:outline-none md:w-96"
      />
      <div className="absolute right-4 h-8 w-8">
        <Image
          fill
          sizes="32"
          className="h-auto"
          src="/tmdb-logo.svg"
          alt="TMBD Logo"
          priority
        />
      </div>
    </>
  );
}
