import { number, string, z } from "zod";

const movie = z.object({
  id: number(),
  name: string().max(50),
  description: string().optional(),
  duration: number(),
  price: number(),
});

const arrayMovies = z.array(movie);

const movieCreate = movie.omit({ id: true });

const moviePatch = movieCreate.partial();

export { movie, arrayMovies, movieCreate, moviePatch };
