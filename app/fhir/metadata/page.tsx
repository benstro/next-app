import { getMetadata } from "@/app/Services/fhir-api-client";
export default async function metadata() {
  const metadata = (await getMetadata()) as Metadata;

  return (
    <div>
        <h1 className="text-lg text-strong">http://fhirserver.hl7fundamentals.org/fhir</h1>
      <ul>
        <li>
          <strong>Resource Type:</strong> {metadata.resourceType}
        </li>
        <li>
          <strong>ID:</strong> {metadata.id}
        </li>
        <li>
          <strong>Name:</strong> {metadata.name}
        </li>
        <li>
          <strong>Status:</strong> {metadata.status}
        </li>
        <li>
          <strong>Date:</strong> {metadata.date}
        </li>
        <li>
          <strong>Publisher:</strong> {metadata.publisher}
        </li>
        <li>
          <strong>Kind:</strong> {metadata.kind}
        </li>
        <li>
          <strong>Software Name:</strong> {metadata.software.name}
        </li>
        <li>
          <strong>Software Version:</strong> {metadata.software.version}
        </li>
        <li>
          <strong>Implementation Description:</strong>{" "}
          {metadata.implementation.description}
        </li>
        <li>
          <strong>Implementation URL:</strong> {metadata.implementation.url}
        </li>
        <li>
          <strong>FHIR Version:</strong> {metadata.fhirVersion}
        </li>
        <li>
          <strong>Formats:</strong> {metadata.format.join(", ")}
        </li>
        <li>
          <strong>Patch Formats:</strong> {metadata.patchFormat.join(", ")}
        </li>
      </ul>
    </div>
  );
}
