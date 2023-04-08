import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl	m-auto mt-12 prose flex flex-col gap-2">
        <h1 className="text-primary my-0">Job Listings</h1>
        <div className="text-sm breadcrumbs">
          <ul className="pl-0 mt-0">
            <li>
              <a>Home</a>
            </li>
            <li>Job listings</li>
          </ul>
        </div>
        {children}
      </main>
    </>
  );
}
