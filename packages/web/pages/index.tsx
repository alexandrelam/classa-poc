import { useQuery } from "@tanstack/react-query";
import {
  JobListingCard,
  JobListingCardSkeleton,
} from "@/components/JobListingCard";
import { JobListingResponse } from "@/../types/src";
import { MainLayout } from "@/components/MainLayout";
import { useState } from "react";
import { Filters } from "@/components/Filters";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, error, refetch } =
    useQuery<JobListingResponse>({
      queryKey: ["jobListings"],
      queryFn: () =>
        fetch(
          `http://localhost:3001/job-listings${
            searchQuery.length ? "?search=" + searchQuery : ""
          }`
        ).then(async (res) => {
          if (!res.ok) {
            throw new Error("Une erreur est survenue 💀");
          }

          return res.json();
        }),
    });

  function searchFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    refetch();
  }

  if (isError) {
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
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{(error as Error).message}</span>
          </div>
        </div>
      </MainLayout>
    );
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
        <div className="flex flex-col gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <JobListingCardSkeleton key={i} />
          ))}
        </div>
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
      <div className="flex gap-12">
        <Filters />
        <div className="w-full">
          <form
            className="flex items-center gap-2 mt-2"
            onSubmit={searchFormSubmit}
          >
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
            <span className="text-sm">
              {data?.total ? data.total : 0} results
            </span>
            {data?.jobListings
              ? data.jobListings.map((jobListing, index) => {
                  return (
                    <JobListingCard key={index} jobListings={jobListing} />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
