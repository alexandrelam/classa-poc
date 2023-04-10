import { Router } from "express";
import { index, create } from "../controllers/jobListing";

export const jobListingRouter = Router();

jobListingRouter.get("/", index);
jobListingRouter.post("/", create);
