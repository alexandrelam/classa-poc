import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-neutral border-opacity-10 flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Classa
      </Link>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Job listings</Link>
          </li>
          <li>
            <Link href="/joblistings/create">Create Job listing</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar placeholder"
        >
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">AL</span>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <Link className="justify-between" href="/profile/settings">
              Settings
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
