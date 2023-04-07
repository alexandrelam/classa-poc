import { JobListingCard, JobListingType } from "@/components/JobListingCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobListings, setJobListings] = useState<JobListingType[]>([]);

  useEffect(() => {
    async function getJobListings() {
      const res = await fetch("http://localhost:3001/job-listings");
      const data = await res.json();
      setJobListings(data);
    }
    getJobListings();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost normal-case text-xl text-accent">Classa</a>
      </div>
      <main className="max-w-2xl	m-auto my-12 prose flex flex-col gap-2">
        <h1 className="text-primary">Job Listings</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Recherchez un poste"
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="my-10 flex flex-col gap-4">
          {jobListings.length &&
            jobListings.map((jobListing, index) => {
              return <JobListingCard key={index} jobListings={jobListing} />;
            })}
        </div>
      </main>
    </>
  );
}

