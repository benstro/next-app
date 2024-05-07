interface Software {
  name: string;
  version: string;
}

interface Implementation {
  description: string;
  url: string;
}

interface Rest {
  mode: string;
  resource: any[]; // Replace 'any' with the actual type if known
  interaction: any[]; // Replace 'any' with the actual type if known
  operation: any[]; // Replace 'any' with the actual type if known
}

interface Metadata {
  resourceType: string;
  id: string;
  name: string;
  status: string;
  date: string;
  publisher: string;
  kind: string;
  software: Software;
  implementation: Implementation;
  fhirVersion: string;
  format: string[];
  patchFormat: string[];
  rest: Rest[];
}

