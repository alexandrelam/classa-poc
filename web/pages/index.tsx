import { useQuery } from "@tanstack/react-query";
import { JobListingCard, JobListingType } from "@/components/JobListingCard";
import { MainLayout } from "@/components/MainLayout";

type JobListingDTO = {
  jobListings: JobListingType[];
  count: number;
};

export default function Home() {
  const { data, isLoading } = useQuery<JobListingDTO>({
    queryKey: ["jobListings"],
    queryFn: () =>
      fetch("http://localhost:3001/job-listings").then((res) => res.json()),
  });

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
        <div>Loading...</div>;
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
      <form className="flex items-center gap-2">
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
      </form>
      <div className="my-10 flex flex-col gap-4">
        <span className="text-sm">{data ? data.count : 0} results</span>
        {data
          ? data.jobListings.map((jobListing, index) => {
              return <JobListingCard key={index} jobListings={jobListing} />;
            })
          : null}
      </div>
    </MainLayout>
  );
}

