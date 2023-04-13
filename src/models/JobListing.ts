import mongoose, { type Model } from "mongoose";

export type JobListingType = {
  _id: string;
  title: string;
  description: string;
  company: string;
  salary: number;
  saved: boolean;
  tags: string[];
};

const JobListingSchema = new mongoose.Schema<JobListingType>({
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
  saved: {
    type: Boolean,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

JobListingSchema.index({
  title: "text",
  description: "text",
  company: "text",
  tags: "text",
});

export default (
  mongoose.models as unknown as { JobListing: Model<JobListingType> }
).JobListing || mongoose.model("JobListing", JobListingSchema);
