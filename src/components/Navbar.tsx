import Link from "next/link";

export function Navbar() {
  return (
    <div className="navbar flex justify-between border-b border-neutral border-opacity-10 bg-base-100">
      <Link href="/" className="btn-ghost btn text-xl normal-case">
        Classa
      </Link>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Job listings</Link>
          </li>
          <li>
            <Link href="/job-listings/create">Create Job listing</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="placeholder btn-ghost btn-circle avatar btn"
        >
          <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
            <span className="text-xs">AL</span>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
