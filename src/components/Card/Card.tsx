import Image from "next/image";

type Prop = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

export default function Card({ imgUrl, title, subtitle }: Prop) {
  return (
    <div className="h-80 cursor-pointer duration-300 hover:opacity-80">
      <div className="relative h-full">
        <Image
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          className="rounded-lg object-cover"
          layout="fill"
          src={imgUrl}
          alt={`Poster of ${title}`}
        />
        <div className="absolute bottom-0 w-full rounded-b-xl bg-zinc-800 bg-opacity-60 px-4 py-2 backdrop-blur-sm">
          <h3 className="truncate text-center text-sm text-cyan-200">
            {title}
          </h3>
          {subtitle && (
            <p className="truncate text-center text-xs text-cyan-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
