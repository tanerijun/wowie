import Image from "next/future/image";
import Link from "next/link";

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  text: string;
};

export default function Hero({ id, imgUrl, title, text }: Props) {
  return (
    <section className="h-128 min-w-full">
      <div className="relative m-auto flex h-full flex-col-reverse pb-12 text-center md:px-36 md:text-left">
        <div className="z-10 flex max-w-2xl flex-col px-4 text-gray-50">
          <Link href={`/${id}`}>
            <a>
              <h2 className="pb-8 text-2xl font-bold md:text-5xl">{title}</h2>
            </a>
          </Link>
          <p className="text-lg md:text-xl">{text}</p>
        </div>
        <Image
          priority
          fill
          className="mask-image object-cover"
          src={imgUrl}
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
