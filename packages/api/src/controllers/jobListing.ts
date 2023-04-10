import { Request, Response } from "express";
import { JobListing } from "../models/jobListing";

export async function index(req: Request, res: Response) {
  try {
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
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const jobListing = await JobListing.create(req.body);
    res.json(jobListing);
  } catch (error) {
    res.status(500).json(error);
  }
}
