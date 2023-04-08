import { Request, Response } from "express";
import { JobListing } from "../models/jobListing";

export async function index(req: Request, res: Response) {
  const jobListings = await JobListing.find({});
  const count = await JobListing.countDocuments({});
  return res.json({ jobListings, count });
}

export async function create(req: Request, res: Response) {
  const jobListing = await JobListing.create(req.body);
  return res.json(jobListing);
}
