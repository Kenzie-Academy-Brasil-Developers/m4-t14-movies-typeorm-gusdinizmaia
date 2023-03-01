import { number, string, z } from "zod";

const movieSchema = z.object({
  id: number(),
  name: string().max(50),
  description: string().optional(),
  duration: number().int().min(1, "Number must be greater than 0"),
  price: number().int(),
});

const movieKeysSchema = Object.keys(
  movieSchema.omit({ description: true }).shape
);

const arrayMoviesSchema = z.array(movieSchema);

const movieCreateSchema = movieSchema.omit({ id: true });

const moviePatchSchema = movieCreateSchema.partial();

const movieSortSchema = movieCreateSchema.omit({
  description: true,
  name: true,
});

export {
  movieSchema,
  movieKeysSchema,
  arrayMoviesSchema,
  movieCreateSchema,
  moviePatchSchema,
  movieSortSchema,
};
