//Import dotenv
import "dotenv/config";

//Import express
import express from "express";

// Import Mongoose
import mongoose from "mongoose";

//Import createServer
import createServer from "../src/createServer";

//Import api routes
import { apiRoutes } from "../routes/apiRoutes";



//Initialise the app
const app = createServer();
//Intialise port
const PORT = process.env.PORT || 8080;

//Initalise mongodb uri
const MONGO_URI = process.env.MONGO_URI || "";

if(!MONGO_URI) {
  throw new Error("missing mongo_uri")
}

try {
  mongoose.connect(MONGO_URI)
} catch (error) {
  throw new Error(`Unable to connect to mongo -- ${MONGO_URI}`)
}

const db = mongoose.connection;

if (!db) {
  console.log("Error connecting db");
} else {
  console.log("Successfully connected to db");
}

// Launch app to listen to specified port
app.listen(PORT, () => {
  console.log(
    `Application is listening on port ${PORT}. Access it here, http://localhost:${PORT}`
  );
});
