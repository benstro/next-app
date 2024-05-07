import Link from "next/link";
import NavLink from "./NavLink";

export default function FhirSideNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink href="/fhir" label="FHIR"/>
        </li>
        <li>
          <Link href={"/fhir/patients"}>Patients</Link>
        </li>
        <li>
          <Link href={"/fhir/metadata"}>Metadata</Link>
        </li>
      </ul>
    </div>
  );
}
