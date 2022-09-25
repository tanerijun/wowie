import Image, { StaticImageData } from "next/future/image";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

export default function Hero({ imgUrl, title, text }: Props) {
  return (
    <section className="border-3 relative h-128">
      <div className="relative m-auto flex h-full max-w-7xl flex-col-reverse pb-12 text-center md:text-left">
        <div className="z-10 flex max-w-2xl flex-col px-4 text-white">
          <h2 className="pb-8 text-2xl font-bold md:text-5xl">{title}</h2>
          <p className="text-lg md:text-xl">{text}</p>
        </div>
        <Image
          priority
          fill
          className="object-cover"
          src={imgUrl}
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
