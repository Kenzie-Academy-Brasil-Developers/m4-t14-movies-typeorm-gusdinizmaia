import { Request, Response } from "express";
import { iMovie, iMovies, iMoviesReturn } from "../interfaces/movies.interface";
import { deleteMovieService } from "../services/movie/deleteMovie.service";
import { getAllMoviesService } from "../services/movie/getAllMovies.service";
import { patchMovieService } from "../services/movie/patchMovie.service";
import { postMovieService } from "../services/movie/postMovie.service";

const postMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: iMovie = await postMovieService(req.body);

  return res.status(201).json(movie);
};

const getAllMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movies: iMoviesReturn = await getAllMoviesService(req);

  return res.status(200).json(movies);
};
const patchMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  const movie = await patchMovieService(req.body, id);

  return res.status(200).json(movie);
};
const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);

  await deleteMovieService(id);

  return res.status(204).json();
};

export {
  postMovieController,
  getAllMoviesController,
  patchMovieController,
  deleteMovieController,
};
