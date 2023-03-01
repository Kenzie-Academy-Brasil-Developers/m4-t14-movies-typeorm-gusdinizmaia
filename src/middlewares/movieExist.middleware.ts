import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../errors/appError";

const movieExist = async (req: Request, res: Response, next: NextFunction) => {
  const movieId = parseInt(req.params.id);

  const movieRespository: Repository<Movies> =
    AppDataSource.getRepository(Movies);

  const validateId = await movieRespository.findOneBy({ id: movieId });

  if (!validateId) {
    throw new AppError("Movie already exist", 409);
  }

  return next();
};

export { movieExist };
