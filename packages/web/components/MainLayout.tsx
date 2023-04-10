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
      <main className="max-w-6xl	m-auto mt-12 prose flex flex-col gap-2">
        <h1 className="text-primary my-0">{title}</h1>
        <div className="text-sm breadcrumbs">
          <ul className="pl-0 mt-0">
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
