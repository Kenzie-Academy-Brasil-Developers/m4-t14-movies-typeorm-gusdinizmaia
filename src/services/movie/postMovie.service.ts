import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { iMovie, iMovieCreate } from "../../interfaces/movies.interface";

const postMovieService = async (movie: iMovieCreate) => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const newMovie: iMovie = movieRepo.create(movie);

  await movieRepo.save(newMovie);

  return newMovie;
};

export { postMovieService };
