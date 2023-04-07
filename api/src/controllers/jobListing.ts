import { Request, Response } from "express";
import { JobListing } from "../models/jobListing";

export async function index(req: Request, res: Response) {
  const jobListings = await JobListing.find({});
  return res.json(jobListings);
}

export async function create(req: Request, res: Response) {
  const jobListing = await JobListing.create(req.body);
  return res.json(jobListing);
}
