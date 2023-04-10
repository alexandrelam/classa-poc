import { Request, Response } from "express";
import { JobListing } from "../models/jobListing";

export async function index(req: Request, res: Response) {
  const search = req.query.search;
  let jobListings = [];
  let total = 0;

  if (search) {
    jobListings = await JobListing.find({
      $text: { $search: search ? (search as string) : "" },
    });
    total = await JobListing.find({
      $text: { $search: search ? (search as string) : "" },
    }).count();
  } else {
    jobListings = await JobListing.find();
    total = await JobListing.find({}).count();
  }

  res.json({ jobListings, total });
}

export async function create(req: Request, res: Response) {
  const jobListing = await JobListing.create(req.body);
  res.json(jobListing);
}
