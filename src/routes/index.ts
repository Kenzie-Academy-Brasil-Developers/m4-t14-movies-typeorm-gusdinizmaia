import { Router } from "express";
import movieRouter from "./movies.routes";

const routes = Router();

routes.use("/movies", movieRouter);

export default routes;
