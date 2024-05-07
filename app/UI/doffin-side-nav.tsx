import Link from "next/link";
import NavLink from "./NavLink";

export default function DoffinSideNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink href="/doffin" label="Doffin"/>
        </li>
        <li>
          <Link href={"/doffin/search"}>search</Link>
        </li>
        <li>
          <Link href={"/doffin/download"}>download</Link>
        </li>
      </ul>
    </div>
  );
}
