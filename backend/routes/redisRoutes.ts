import { Router } from "express";
import { getWithAxios, getWithRedis, redisTeardown } from "../src/redisTest";

export const redisRoutes = Router();

redisRoutes.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});
redisRoutes.route("/redistime").get(getWithRedis);
redisRoutes.route("/axiostime").get(getWithAxios);
redisRoutes.route("/clearcache").post(redisTeardown);
