import { useQuery } from "@tanstack/react-query";
import { JobListingCard } from "@/components/JobListingCard";
import { JobListingResponse } from "@/../types/src";
import { MainLayout } from "@/components/MainLayout";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, refetch } = useQuery<JobListingResponse>({
    queryKey: ["jobListings"],
    queryFn: () =>
      fetch(
        `http://localhost:3001/job-listings${
          searchQuery.length ? "?search=" + searchQuery : ""
        }`
      ).then((res) => res.json()),
  });

  function searchFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    refetch();
  }

  if (isLoading)
    return (
      <MainLayout
        title="Job Listings"
        breadcrumbs={[
          {
            link: "/",
            name: "Home",
          },
          {
            link: null,
            name: "Job listings",
          },
        ]}
      >
        <div>Loading...</div>
      </MainLayout>
    );

  return (
    <MainLayout
      title="Job Listings"
      breadcrumbs={[
        {
          link: "/",
          name: "Home",
        },
        {
          link: null,
          name: "Job listings",
        },
      ]}
    >
      <form className="flex items-center gap-2" onSubmit={searchFormSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Recherchez un poste"
          className="input input-bordered w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
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
      </form>
      <div className="my-10 flex flex-col gap-4">
        <span className="text-sm">{data ? data.total : 0} results</span>
        {data
          ? data.jobListings.map((jobListing, index) => {
              return <JobListingCard key={index} jobListings={jobListing} />;
            })
          : null}
      </div>
    </MainLayout>
  );
}
