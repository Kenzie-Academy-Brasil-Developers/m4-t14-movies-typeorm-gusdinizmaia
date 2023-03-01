import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { iMovie, iMovieUpdate } from "../../interfaces/movies.interface";
import { verifyName } from "../../middlewares/vefiryName.middleware";

const patchMovieService = async (
  movie: iMovieUpdate,
  id: number
): Promise<iMovie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldMovie = await movieRepo.findOneBy({ id: id });

  const newMovie = movieRepo.create({ ...oldMovie, ...movie });

  await movieRepo.save(newMovie);

  return newMovie;
};

export { patchMovieService };
