import express from "express";
//Import api routes
import { apiRoutes } from "../routes/apiRoutes";

function createServer() {
  const app = express();
  app.use(express.json());
  // Configure bodyparser to handle post requests
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.get("/", (req, res) => {
    res.send("Hello");
  });

  //Use api routes in the App
  app.use("/api", apiRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({
      status: "error",
      message: "Page does not exist"
    });
  });
  return app;
}

export default createServer;
