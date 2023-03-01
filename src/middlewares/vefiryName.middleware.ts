import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors/appError";

const verifyName = async (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;

  if (name) {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

    const validateName = await movieRepo.findOneBy({ name: name });

    if (validateName) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};

export { verifyName };
