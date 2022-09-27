import Link from "next/link";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <div className="bg-zinc-800">
      <div className="m-auto flex max-w-7xl items-center p-4 text-lg text-white">
        <Link href="/">
          <a>
            <span className="cursor-pointer duration-300 hover:opacity-80">
              Home
            </span>
          </a>
        </Link>
        <span className="block px-2">|</span>
        <span className="truncate font-bold">{title}</span>
      </div>
    </div>
  );
}
