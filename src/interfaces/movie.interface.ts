import { z } from "zod";
import { movie, movieCreate, moviePatch } from "../schemas/movie.schema";

type iMovie = z.infer<typeof movie>;
type iMovieCreate = z.infer<typeof movieCreate>;
type iMoviePatch = z.infer<typeof moviePatch>;
type iMovies = iMovie[];

export { iMovie, iMovieCreate, iMoviePatch, iMovies };
