import { Router } from "express";
import {
  deleteMovieController,
  getAllMoviesController,
  patchMovieController,
  postMovieController,
} from "../controllers/movies.controllers";
import { movieExist } from "../middlewares/movieExist.middleware";
import { verifyData } from "../middlewares/verifydata.middleware";
import { movieCreateSchema, moviePatchSchema } from "../schemas/movie.schema";

const movieRouter = Router();

movieRouter.post("", verifyData(movieCreateSchema), postMovieController);
movieRouter.get("", getAllMoviesController);
movieRouter.patch(
  "/:id",
  movieExist,
  verifyData(moviePatchSchema),
  patchMovieController
);
movieRouter.delete("/:id", movieExist, deleteMovieController);

export default movieRouter;
