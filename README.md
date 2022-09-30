## WOWIE

A frontend for the TMDB database where you can find information on movies e.g synopsis, budget, revenue, casts, etc.

The Homepage is an infinite scrolling list listing the most popular movies from TMDB, but when a query is provided in the search input, movies related to the query will be listed instead.

The infinite scrolling is implemented using Intersection Observer instead of Scroll listener for better performance.

The data fetching is handled by React Query, so the data is cached, which means that no data fetching is needed when you return to the Homepage from other sections.

Finally, clicking on a movie title brings you to a page containing the details of the movie. This page is rendered statically by NextJS using `getStaticProps` on build. This page shows the synopsis, infos, and the casts of the movie.

### Tech Stack

- TypeScript
- NextJS
- React
- React Query
- Tailwind CSS

### Install

1. Clone the project
   ```
   git@github.com:tanerijun/wowie.git
   ```
2. Create a file called `.env.local` in the root folder, and input your API key from TBDM (V3 API)
   ```
   API_KEY=YOUR_API_KEY
   ```
3. Install project
   ```
   pnpm install
   ```
4. Start developing
   ```
   pnpm dev
   ```

### Demo

The site is live [here](https://wowie-tanerijun.vercel.app)
