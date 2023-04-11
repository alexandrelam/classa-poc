import { MainLayout } from "~/components/MainLayout";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function Create() {
  const router = useRouter();
  const createMutation = api.jobListing.create.useMutation();

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
      salary: parseInt(target.salary.value),
      tags: [],
    };

    await createMutation.mutateAsync(payload);

    router.push("/").catch(console.log);
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
      <form onSubmit={(e) => void createJobListing(e)}>
        <div className="form-control flex w-full flex-col gap-4">
          <div>
            <label className="label-text label">Job title</label>
            <input
              name="title"
              type="text"
              placeholder="Software engineer"
              className="input-bordered input w-full max-w-md"
            />
          </div>
          <div>
            <label className="label-text label">Job description</label>
            <textarea
              name="description"
              className="textarea-bordered textarea w-full max-w-md"
              placeholder="description..."
            ></textarea>
          </div>
          <div>
            <label className="label-text label">Company name</label>
            <input
              name="companyName"
              type="text"
              placeholder="Google"
              className="input-bordered input w-full max-w-md"
            />
          </div>
          <div>
            <label className="label-text label">Salary</label>
            <input
              name="salary"
              type="number"
              placeholder="100000"
              className="input-bordered input w-full max-w-md"
            />
          </div>
          <button className="btn-primary btn mt-8">Create job listing</button>
        </div>
      </form>
    </MainLayout>
  );
}
