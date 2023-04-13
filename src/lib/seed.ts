import mongoose from "mongoose";
import JobListing from "../models/JobListing";
import { type JobListingType } from "../models/JobListing";

const MONGODB_URI = "mongodb://localhost:27017/classa";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const jobListings: Omit<JobListingType, "_id">[] = [
  {
    title: "Software Engineer",
    description: "We are looking for a software engineer to join our team.",
    company: "Google",
    salary: 100000,
    saved: false,
    tags: ["software", "engineer", "google", "best job"],
  },
  {
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin neque id fringilla condimentum. Mauris malesuada, dui posuere congue vestibulum, erat nisi tempus diam, a ornare lacus dolor luctus turpis. Maecenas et iaculis augue. Praesent scelerisque, nisl a posuere bibendum, enim mi consectetur nibh, non lacinia nibh ipsum a dui. In hac habitasse platea dictumst. Curabitur et pellentesque lacus. Nam semper ac lorem eu pulvinar. Aliquam mattis, dolor quis sagittis aliquet, mi velit suscipit diam, quis gravida nunc nisi ut tellus. Phasellus tempus placerat libero, at pulvinar mauris euismod in. Suspendisse mi magna, laoreet vel turpis sit amet, tincidunt posuere augue. Aliquam faucibus magna purus, sit amet scelerisque lorem efficitur non. Aliquam faucibus nibh lorem, et luctus tortor gravida at. Aliquam ac aliquam quam, nec finibus lectus. Maecenas sapien risus, efficitur vitae ipsum non, accumsan vehicula neque. Vestibulum aliquam est ac enim iaculis luctus. Nullam sollicitudin, risus nec maximus facilisis, sem lorem iaculis ligula, quis iaculis lacus lectus eget nisl. Sed vitae nibh felis. Sed malesuada, purus at tempor sodales, mauris lorem posuere leo, at laoreet nisl purus at neque. Nullam sollicitudin, nisl ut facilisis facilisis, massa sapien condimentum urna, quis vestibulum ex nunc in est. Phasellus et mattis est, porta vulputate quam. Vestibulum non lorem sed tellus consequat feugiat a et risus. Suspendisse aliquam nisl at augue interdum, in molestie tellus dignissim. Nam placerat volutpat mauris ac rhoncus.",
    company: "Facebook",
    salary: 100000,
    saved: true,
    tags: ["software", "engineer", "facebook"],
  },
  {
    title: "Data Scientist",
    description: "We are looking for a data scientist to join our team.",
    company: "Google",
    salary: 100000,
    saved: false,
    tags: ["data", "scientist", "google"],
  },
  {
    title: "DevOps Engineer",
    description: "We are looking for a devops engineer to join our team.",
    company: "Facebook",
    salary: 100000,
    saved: false,
    tags: ["devops", "engineer", "facebook"],
  },
];

async function seed() {
  console.info("Connecting to database...");
  const conn = await mongoose.connect(MONGODB_URI as string);
  await conn.connection.db.dropDatabase();
  console.info("Seed database...");
  await JobListing.insertMany(jobListings);
  console.info("Done!");

  await mongoose.connection.close();
  process.exit(0);
}

seed().catch(console.log);
