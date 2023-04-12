import { JobListingCard } from "~/components/JobListingCard";
import { MainLayout } from "~/components/MainLayout";
import { Filters } from "~/components/Filters";

import { api } from "~/utils/api";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data } = api.jobListing.getAll.useQuery({
    search: searchQuery,
  });

  function searchFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    setSearchQuery(target.search.value);
  }

  function makeSearchWhenInputEmpty(searchInputValue: string) {
    if (searchInputValue === "") {
      setSearchQuery("");
    }
  }

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
            className="mt-2 flex items-center gap-2"
            onSubmit={searchFormSubmit}
          >
            <input
              name="search"
              type="text"
              placeholder="Cherchez un job par titre, entreprise, tag... "
              className="input-bordered input w-full"
              onChange={(e) => {
                makeSearchWhenInputEmpty(e.target.value);
              }}
            />
            <button className="btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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
            {data
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
