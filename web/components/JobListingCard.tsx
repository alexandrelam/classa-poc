export type JobListingType = {
  _id: String;
  title: String;
  description: String;
  company: String;
  salary: Number;
  tags: String[];
};

type Props = {
  jobListings: JobListingType;
};
export function JobListingCard({ jobListings }: Props) {
  return (
    <div className="card w-full bg-base-100 border">
      <div className="card-body">
        <div className="flex items-end gap-2">
          <h2 className="card-title m-0">{jobListings.title}</h2>
          <span>{jobListings.company}</span>
        </div>
        <p className="m-0">{jobListings.description}</p>
        <div className="w-full flex items-end space-between">
          <div className="flex gap-1 mr-auto mb-1">
            {jobListings.tags.map((tag, index) => (
              <span key={index} className="badge badge-ghost">
                {tag}
              </span>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Détails</button>
          </div>
        </div>
      </div>
    </div>
  );
}
