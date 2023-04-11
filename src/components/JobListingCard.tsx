import { type JobListingType } from "~/models/JobListing";

type Props = {
  jobListings: JobListingType;
};

export function JobListingCard({ jobListings }: Props) {
  return (
    <div className="card-bordered card w-full bg-base-100">
      <div className="card-body">
        <div className="flex items-end gap-2">
          <h2 className="card-title m-0">{jobListings.title}</h2>
          <span>{jobListings.company}</span>
        </div>
        <p className="m-0 max-h-20 overflow-hidden">
          {jobListings.description}
        </p>
        <div className="space-between flex w-full items-end">
          <div className="mb-1 mr-auto flex gap-1">
            {jobListings.tags.map((tag, index) => (
              <span key={index} className="badge-ghost badge">
                {tag}
              </span>
            ))}
            <span className="badge-secondary badge">
              {new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
              }).format(jobListings.salary)}
            </span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn-primary btn">Détails</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JobListingCardSkeleton() {
  return (
    <div className="card-bordered card w-full bg-base-100">
      <div className="card-body animate-pulse">
        <span className="h-4 w-40 rounded-full bg-neutral"></span>
        <span className="mt-4 h-4 w-72 rounded-full bg-neutral"></span>
        <span className="h-4 w-96 rounded-full bg-neutral"></span>
        <span className="h-4 w-80 rounded-full bg-neutral"></span>
      </div>
    </div>
  );
}
