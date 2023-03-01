import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  movieSchema,
  movieCreateSchema,
  moviePatchSchema,
} from "../schemas/movie.schema";

type iMovie = z.infer<typeof movieSchema>;
type iMovieRepo = Repository<Movie>;
type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMoviePatch = z.infer<typeof moviePatchSchema>;
type iMovies = iMovie[] | [];
interface iMoviesReturn {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: iMovies;
}
type iMovieUpdate = DeepPartial<iMovie>;

export {
  iMovie,
  iMovieRepo,
  iMovieCreate,
  iMoviePatch,
  iMovies,
  iMoviesReturn,
  iMovieUpdate,
};
