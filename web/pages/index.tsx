import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function getJobListings() {
      const res = await fetch("http://localhost:3001/job-listings");
      const data = await res.json();
      console.log(data);
    }
    getJobListings();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost normal-case text-xl text-accent">Classa</a>
      </div>
      <main className="max-w-lg	m-auto my-20 prose">
        <h1 className="text-primary">Job Listings</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Recherchez un poste"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}

