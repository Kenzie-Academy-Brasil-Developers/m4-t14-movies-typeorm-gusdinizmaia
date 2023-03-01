import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Movies } from "../../entities";
import { iMovie, iMovieUpdate } from "../../interfaces/movies.interface";

const patchMovieService = async (
  movie: iMovieUpdate,
  id: number
): Promise<iMovie> => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const oldMovie = await movieRepo.findOneBy({ id: id });

  const newMovie = movieRepo.create({ ...oldMovie, ...movie });

  await movieRepo.save(newMovie);

  return newMovie;
};

export { patchMovieService };
