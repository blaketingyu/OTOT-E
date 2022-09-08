//Import dotenv
import * as dotenv from "dotenv";
//Import express
import express from "express";

//Import api routes
import { apiRoutes } from "../routes/apiRoutes";

// Import Mongoose
import mongoose from "mongoose";


//Initialise the app
let app = express();

dotenv.config();

//Intialise port
const PORT = process.env.PORT || 8080;
//Initalise mongodb uri
const MONGO_URI = process.env.MONGO_URI || "";

// Configure bodyparser to handle post requests
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log(process.env.PORT);
  console.log(process.env.MONGO_URI);
  res.send("Hello");
});

//Use api routes in the App
app.use('/api', apiRoutes);

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
