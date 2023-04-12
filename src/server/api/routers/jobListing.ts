import { z } from "zod";
import dbConnect from "~/lib/dbConnect";
import JobListing from "~/models/JobListing";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobListingRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ search: z.string().optional() }))
    .query(async ({ input }) => {
      await dbConnect();

      let jobListings;

      if (input.search && input.search.length)
        jobListings = await JobListing.find({
          $text: { $search: input.search },
        });
      else jobListings = await JobListing.find({});

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
