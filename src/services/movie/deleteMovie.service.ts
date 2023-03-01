import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";

const deleteMovieService = async (id: number) => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const deleteMovie = await movieRepo.findOneBy({ id: id });

  await movieRepo.remove(deleteMovie!);

  return;
};

export { deleteMovieService };
