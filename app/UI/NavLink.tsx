import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <div className="hover:bg-blue-200 bg-blue-700 text-white">
      <Link href={props.href}>{props.label}</Link>
    </div>
  );
}