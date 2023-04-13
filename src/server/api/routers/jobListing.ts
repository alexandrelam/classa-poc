import { z } from "zod";
import dbConnect from "~/lib/dbConnect";
import JobListing from "~/models/JobListing";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobListingRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ search: z.string().optional() }))
    .query(async ({ input }) => {
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
      const jobListing = await JobListing.create({
        ...input,
      });

      return jobListing;
    }),
  toggleSaved: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const id = input.id;
      const jobListing = await JobListing.findById(id);

      if (!jobListing) return null;

      jobListing.saved = !jobListing.saved;

      await jobListing.save();

      return jobListing;
    }),
});
