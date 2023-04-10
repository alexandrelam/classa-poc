import { Request, Response } from "express";
import { JobListing } from "../models/jobListing";
import { JobListingResponse } from "types";

export async function index(req: Request, res: Response) {
  const jobListings = await JobListing.find({});
  const total = await JobListing.countDocuments({});
  return res.json({ jobListings, total });
}

export async function create(req: Request, res: Response) {
  const jobListing = await JobListing.create(req.body);
  return res.json(jobListing);
}
