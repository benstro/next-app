import { getPatients } from "@/app/Services/fhir-api-client";

export default async function page() {
  const patients = await getPatients();

  const parsedPatints = JSON.stringify(patients);
  return <div>{parsedPatints}</div>;
}
