export type JobListingType = {
  _id: string;
  title: string;
  description: string;
  company: string;
  salary: number;
  tags: string[];
};

export type JobListingResponse = {
  jobListings: JobListingType[];
  total: number;
};
