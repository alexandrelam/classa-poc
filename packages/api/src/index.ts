import express, { Express, Request, Response } from "express";
import { jobListingRouter } from "./routes/jobListing";
import mongoose from "mongoose";
import cors from "cors";

const app: Express = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/job-listings", jobListingRouter);

async function start() {
  await mongoose.connect("mongodb://127.0.0.1:27017/classa");

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

start();
