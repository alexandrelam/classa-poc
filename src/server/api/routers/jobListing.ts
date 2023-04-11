import { z } from "zod";
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
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        company: z.string(),
        salary: z.number(),
        tags: z.array(z.string()),
      })
    )
    .mutation(async ({ input }) => {
      await dbConnect();

      const jobListing = await JobListing.create({
        ...input,
      });

      return jobListing;
    }),
});
