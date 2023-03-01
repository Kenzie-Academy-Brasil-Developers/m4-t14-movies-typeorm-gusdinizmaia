import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Movies } from "../../entities";
import { iMovies } from "../../interfaces/movies.interface";

const getAllMoviesService = async (req: any) => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const sort =
    req.query.sort === ("duration" || "price") ? req.query.sort : "id";
  const order = req.query.order ?? "asc";

  const allMovies: iMovies = await movieRepo.find();

  const movies: iMovies = await movieRepo.find({
    take: perPage,
    skip: (page - 1) * perPage,
    order: {
      [sort]: order,
    },
  });

  const minPage = page === 1 ? null : page - 1;
  const maxPage = allMovies.length > perPage * page ? page + 1 : null;
  console.log(req);

  return {
    prevPage: minPage,
    nextPage: maxPage,
    count: allMovies.length,
    data: movies,
  };
};

export { getAllMoviesService };
