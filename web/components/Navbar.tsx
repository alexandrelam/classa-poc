import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-neutral border-opacity-10 flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Classa
      </Link>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/profile.webp"
              alt="profile picture"
              width={40}
              height={40}
            />
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
