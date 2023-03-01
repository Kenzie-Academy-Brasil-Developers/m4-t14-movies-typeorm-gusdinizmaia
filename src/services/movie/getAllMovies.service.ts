import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { iMovies } from "../../interfaces/movies.interface";
import { movieKeysSchema } from "../../schemas/movie.schema";

const getAllMoviesService = async (req: any) => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  let page = parseInt(req.query.page);
  let perPage = parseInt(req.query.perPage);
  let sort = req.query.sort ?? "id";
  let order = sort === "id" ? "asc" : req.query.order;

  page = page > 0 ? page : 1;
  perPage = perPage > 0 && perPage < 5 ? perPage : 5;

  sort = movieKeysSchema.includes(sort) ? sort : "id";
  order = order === "desc" ? "desc" : "asc";

  const allMovies: iMovies = await movieRepo.find();

  const movies: iMovies = await movieRepo.find({
    take: perPage,
    skip: (page - 1) * perPage,
    order: {
      [sort]: order,
    },
  });

  const minPage = page !== 1 ? page - 1 : false;
  const maxPage = allMovies.length > perPage * page ? page + 1 : false;

  return {
    prevPage: minPage
      ? `http://localhost:3000/movies?page=${minPage}&perPage=${perPage}`
      : null,
    nextPage: maxPage
      ? `http://localhost:3000/movies?page=${maxPage}&perPage=${perPage}`
      : null,
    count: allMovies.length,
    data: movies,
  };
};

export { getAllMoviesService };
