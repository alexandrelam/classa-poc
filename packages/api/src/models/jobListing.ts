import mongoose from "mongoose";
import { JobListingType } from "types";

const jobListingSchema = new mongoose.Schema<JobListingType>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

jobListingSchema.index({
  title: "text",
  description: "text",
  company: "text",
  tags: "text",
});

export const JobListing = mongoose.model("JobListing", jobListingSchema);
