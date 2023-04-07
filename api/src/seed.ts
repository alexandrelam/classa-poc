import mongoose from "mongoose";
import { JobListing, jobListingType } from "./models/jobListing";

const jobListings: jobListingType[] = [
  {
    title: "Software Engineer",
    description: "We are looking for a software engineer to join our team.",
    company: "Google",
    salary: 100000,
    tags: ["software", "engineer", "google"],
  },
  {
    title: "Software Engineer",
    description: "We are looking for a software engineer to join our team.",
    company: "Facebook",
    salary: 100000,
    tags: ["software", "engineer", "facebook"],
  },
  {
    title: "Data Scientist",
    description: "We are looking for a data scientist to join our team.",
    company: "Google",
    salary: 100000,
    tags: ["data", "scientist", "google"],
  },
  {
    title: "DevOps Engineer",
    description: "We are looking for a devops engineer to join our team.",
    company: "Facebook",
    salary: 100000,
    tags: ["devops", "engineer", "facebook"],
  },
];

async function seed() {
  console.info("Connecting to database...");
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/classa");
  await conn.connection.db.dropDatabase();
  console.info("Seed database...");
  await JobListing.insertMany(jobListings);
  console.info("Done!");

  await mongoose.connection.close();
  process.exit(0);
}

seed();
