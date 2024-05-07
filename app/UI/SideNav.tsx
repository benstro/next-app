import Link from "next/link";

export default function SideNav() {
  return (
    <div>
      <ul>
        <li>
            <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/dashboard/invoices"}>Invoices</Link>
        </li>
        <li>
          <Link href={"/dashboard/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
}
