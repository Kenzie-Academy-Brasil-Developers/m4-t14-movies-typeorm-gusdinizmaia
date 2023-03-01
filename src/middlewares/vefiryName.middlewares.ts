import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Movies } from "../entities";
import { AppError } from "../errors/appError";

const verifyName = async (name: string) => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const validateName = await movieRepo.findOneBy({ name: name });

  if (!validateName) {
    throw new AppError("Movie already exists", 409);
  }
};

export { verifyName };
