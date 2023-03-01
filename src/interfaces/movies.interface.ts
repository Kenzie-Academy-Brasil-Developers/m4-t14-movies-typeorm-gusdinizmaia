import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieSchema,
  movieCreateSchema,
  moviePatchSchema,
} from "../schemas/movie.schema";

type iMovie = z.infer<typeof movieSchema>;
type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMoviePatch = z.infer<typeof moviePatchSchema>;
type iMovies = iMovie[];
type iMovieUpdate = DeepPartial<iMovie>;

export { iMovie, iMovieCreate, iMoviePatch, iMovies, iMovieUpdate };
