import Link from "next/link";
import { Navbar } from "./Navbar";

export type BreadCrumbsType = {
  link: string | null;
  name: string;
};

type Props = {
  title: string;
  breadcrumbs: BreadCrumbsType[];
  children: React.ReactNode;
};

export function MainLayout({ title, breadcrumbs, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="prose	m-auto mt-12 flex max-w-6xl flex-col gap-2">
        <h1 className="my-0 text-primary">{title}</h1>
        <div className="breadcrumbs text-sm">
          <ul className="mt-0 pl-0">
            {breadcrumbs.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {children}
      </main>
    </>
  );
}
