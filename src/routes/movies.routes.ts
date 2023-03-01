import { Router } from "express";
import {
  deleteMovieController,
  getAllMoviesController,
  patchMovieController,
  postMovieController,
} from "../controllers/movies.controllers";
import { movieExist } from "../middlewares/movieExist.middleware";
import { verifyName } from "../middlewares/vefiryName.middleware";
import { verifyData } from "../middlewares/verifydata.middleware";
import { movieCreateSchema, moviePatchSchema } from "../schemas/movie.schema";

const movieRouter = Router();

movieRouter.post(
  "",
  verifyName,
  verifyData(movieCreateSchema),
  postMovieController
);
movieRouter.get("", getAllMoviesController);
movieRouter.patch(
  "/:id",
  movieExist,
  verifyName,
  verifyData(moviePatchSchema),
  patchMovieController
);
movieRouter.delete("/:id", movieExist, deleteMovieController);

export default movieRouter;
