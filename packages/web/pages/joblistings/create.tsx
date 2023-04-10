import { MainLayout } from "@/components/MainLayout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Create() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createJobListing,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobListings"] });
    },
  });

  async function createJobListing(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      companyName: { value: string };
      salary: { value: string };
    };

    const payload = {
      title: target.title.value,
      description: target.description.value,
      company: target.companyName.value,
      salary: target.salary.value,
      tags: [],
    };

    await fetch("http://localhost:3001/job-listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.log(err);
    });

    router.push("/");
  }

  return (
    <MainLayout
      title="Create a new job listing"
      breadcrumbs={[
        {
          link: "/",
          name: "Home",
        },
        {
          link: "/",
          name: "Job listings",
        },
        {
          link: null,
          name: "Create a new job listing",
        },
      ]}
    >
      <form onSubmit={mutation.mutate}>
        <div className="form-control w-full flex flex-col gap-4">
          <div>
            <label className="label label-text">Job title</label>
            <input
              name="title"
              type="text"
              placeholder="Software engineer"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div>
            <label className="label label-text">Job description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full max-w-md"
              placeholder="description..."
            ></textarea>
          </div>
          <div>
            <label className="label label-text">Company name</label>
            <input
              name="companyName"
              type="text"
              placeholder="Google"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div>
            <label className="label label-text">Salary</label>
            <input
              name="salary"
              type="number"
              placeholder="100000"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <button className="btn btn-primary mt-8">Create job listing</button>
        </div>
      </form>
    </MainLayout>
  );
}
