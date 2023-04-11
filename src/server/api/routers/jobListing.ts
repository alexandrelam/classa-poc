import dbConnect from "~/lib/dbConnect";
import JobListing from "~/models/JobListing";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobListingRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    await dbConnect();

    const jobListings = await JobListing.find({});
    const total = await JobListing.countDocuments({});

    return { jobListings, total };
  }),
});
