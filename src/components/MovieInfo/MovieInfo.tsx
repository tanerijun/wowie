import Image from "next/image";
import { calcTime } from "../../utils/calcTime";
import { convertMoney } from "../../utils/convertMoney";
import type { Crew } from "../../utils/types";
import Pill from "../Pill/Pill";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  overview: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

export default function MovieInfo({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  overview,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) {
  return (
    <div className="relative h-auto w-full p-4">
      <div className="relative z-10 m-auto flex h-full min-h-128 max-w-7xl flex-col rounded-xl bg-tmdb-primary-color bg-opacity-70 p-4 backdrop-blur-sm md:flex-row">
        <div className="relative h-96 w-full md:h-auto md:w-1/3">
          <Image
            placeholder="blur"
            blurDataURL="/placeholder.png"
            className="rounded-lg object-cover"
            layout="fill"
            src={thumbUrl}
            alt={`Poster of ${title}`}
          />
          <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-tmdb-primary-color bg-opacity-70 text-sm font-bold text-gray-100 backdrop-blur-sm">
            {rating.toFixed(1)}
          </div>
        </div>
        <div className="w-full px-0 py-4 text-center text-white md:w-2/3 md:py-0 md:px-8 md:text-left">
          <h2 className="pb-4 text-2xl font-bold md:text-4xl">
            {title} ({year})
          </h2>
          <h3 className="text-lg font-bold">Overview</h3>
          <p className="mb-8 text-sm md:text-lg">{overview}</p>
          <div>
            <div>
              <h3 className="text-lg font-bold">
                Director{directors.length > 1 && "s"}
              </h3>
              <div>
                {directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Movie Data</h3>
              <Pill className="ml-0" text={`Running time: ${calcTime(time)}`} />
              <Pill
                text={`Budget: ${budget > 0 ? convertMoney(budget) : "N/A"}`}
              />
              <Pill
                text={`Revenue: ${revenue > 0 ? convertMoney(revenue) : "N/A"}`}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        priority
        placeholder="blur"
        blurDataURL="/placeholder.png"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        className="mask-image"
        src={backgroundImgUrl}
        alt={`Poster of ${title} as background`}
      />
    </div>
  );
}
