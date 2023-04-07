import mongoose from "mongoose";

export type JobListingType = {
  title: string;
  description: string;
  company: string;
  salary: number;
  tags: string[];
};

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

export const JobListing = mongoose.model("JobListing", jobListingSchema);
