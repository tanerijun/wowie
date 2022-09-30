import Link from "next/link";

type Props = {
  title: string;
};

export default function Breadcrumb({ title }: Props) {
  return (
    <div>
      <div className="text-md flex p-4 text-gray-100">
        <Link href="/">
          <a>
            <span className="cursor-pointer duration-300 hover:text-cyan-200">
              Home
            </span>
          </a>
        </Link>
        <span className="block px-2">|</span>
        <a href="#">
          <span className="cursor-pointer truncate font-bold duration-300 hover:text-cyan-200">
            {title}
          </span>
        </a>
      </div>
    </div>
  );
}
