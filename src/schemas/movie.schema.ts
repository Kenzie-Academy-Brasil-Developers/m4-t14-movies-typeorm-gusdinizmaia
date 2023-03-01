import { number, string, z } from "zod";

const movieSchema = z.object({
  id: number(),
  name: string().max(50),
  description: string().optional(),
  duration: number(),
  price: number(),
});

const arrayMoviesSchema = z.array(movieSchema);

const movieCreateSchema = movieSchema.omit({ id: true });

const moviePatchSchema = movieCreateSchema.partial();

const movieSortSchema = movieCreateSchema.omit({
  description: true,
  name: true,
});

export {
  movieSchema,
  arrayMoviesSchema,
  movieCreateSchema,
  moviePatchSchema,
  movieSortSchema,
};
