import { Router } from "express";
import {
  normalMongoGet,
  getWithRedis,
  populateDB,
  clearRedis,
  clearDB,
} from "../src/redisTest";

export const redisRoutes = Router();

redisRoutes.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!",
  });
});
redisRoutes.route("/redistime").get(getWithRedis);
redisRoutes.route("/mongotime").get(normalMongoGet);
redisRoutes.route("/clearcache").post(clearRedis);
redisRoutes.route("/populateDB").post(populateDB);
redisRoutes.route("/clearDB").post(clearDB);
