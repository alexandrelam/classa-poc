import mongoose from "mongoose";

export type jobListingType = {
  title: String;
  description: String;
  company: String;
  salary: Number;
  tags: String[];
};

const jobListingSchema = new mongoose.Schema<jobListingType>({
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
