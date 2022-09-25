import { NextApiRequest, NextApiResponse } from "next";
import { basicFetch } from "../../src/utils/fetchFunctions";
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "../../src/utils/tmdbHelpers";
import { Movies } from "../../src/utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query;

  // Grab most popular movies by default if seach query is not given
  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  try {
    console.log("Inside try");
    const data = await basicFetch<Movies>(endpoint);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send({} as Movies);
  }
}
