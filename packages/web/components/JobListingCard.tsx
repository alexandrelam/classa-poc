import { JobListingType } from "types";

type Props = {
  jobListings: JobListingType;
};
export function JobListingCard({ jobListings }: Props) {
  return (
    <div className="card card-bordered w-full bg-base-100">
      <div className="card-body">
        <div className="flex items-end gap-2">
          <h2 className="card-title m-0">{jobListings.title}</h2>
          <span>{jobListings.company}</span>
        </div>
        <p className="m-0 max-h-20 overflow-hidden">
          {jobListings.description}
        </p>
        <div className="w-full flex items-end space-between">
          <div className="flex gap-1 mr-auto mb-1">
            {jobListings.tags.map((tag, index) => (
              <span key={index} className="badge badge-ghost">
                {tag}
              </span>
            ))}
            <span className="badge badge-secondary">
              {new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
              }).format(jobListings.salary)}
            </span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Détails</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JobListingCardSkeleton() {
  return (
    <div className="card card-bordered w-full bg-base-100">
      <div className="card-body animate-pulse">
        <span className="w-40 h-4 rounded-full bg-neutral"></span>
        <span className="w-72 mt-4 h-4 rounded-full bg-neutral"></span>
        <span className="w-96 h-4 rounded-full bg-neutral"></span>
        <span className="w-80 h-4 rounded-full bg-neutral"></span>
      </div>
    </div>
  );
}
