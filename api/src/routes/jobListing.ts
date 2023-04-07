import { Router } from "express";
import { index, create } from "../controllers/jobListing";

export const jobListingRouter = Router();

jobListingRouter.get("/", index);
jobListingRouter.post(
  "/",
  async (req, res) =>
    await create(req, res).catch((err) => res.status(400).json(err))
);
