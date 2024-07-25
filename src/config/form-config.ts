// src/config/form-config.ts

// Step Descriptors
// Each step shows a step title, description and progress percentage that corresponds to the progress bar
export const steps = [
  { step: "Onboarding", description: "Step 1", progress: 15 },
  { step: "Verification", description: "Step 2", progress: 40 },
  // { step: "Another step here for more data", description: "Step 3", progress: 65 },
];

// Individual Field Interface
// Each field to be filled out contains the following
export interface Field {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  rows?: number; // for Textarea
  accept?: string; // for file input
}

// Step Groups that break out long forms into multiple steps
export const step1Fields: Field[] = [
  { id: "name", label: "Primary Responsible Party", type: "text", placeholder: "Legal name of Primary Indivdual responsible for Account" },
  { id: "email", label: "Contact Email", type: "email", placeholder: "Primary contact email for Primary Repsonsible Party" },
  { id: "phone", label: "Contact Phone Number", type: "tel", placeholder: "Primary phone number for Primary Responsible Party" },
  { id: "message", label: "Brief Description of onboarding business type", type: "textarea", placeholder: "Provide a brief description of your business", rows: 4 },
  { id: "password", label: "Password", type: "password", placeholder: "Enter a password" },
];

export const step2Fields: Field[] = [
  
  { id: "document", label: "Articles of Organization", type: "file", accept: ".pdf,.doc,.docx,.jpg,.png" },
  { id: "document", label: "IRS Issued EIN Letter", type: "file", accept: ".pdf,.doc,.docx,.jpg,.png" },
  { id: "document", label: "Business License", type: "file", accept: ".pdf,.doc,.docx,.jpg,.png" },
  { id: "address", label: "Legal Address of business", type: "text", placeholder: "Please provide the legal address of the business" },
  { id: "city", label: "City", type: "text", placeholder: "Enter your city" },
  { id: "signature", label: "Signature", type: "file", placeholder: "Please provide your signature" },
];

// export const step3Fields: Field[] = [
//   ...
// ];
