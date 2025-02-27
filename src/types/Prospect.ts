import { Invoice } from "./Invoice";

// This could just be a boolean but I prefer having literals in case there are more statuses in the future
export type ProspectStatus = "pending" | "approved" | "declined";

export type Prospect = {
  id: string;
  name: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  profilePhotoUrl: string;
  country: string;
  city: string;
  fullAddress: string;
  googleMapsLocation: string; //???
  bankName: string;
  bankAccountNumber: string;
  taxId: string;
  document: string;
  relevantDetails: string;

  status: ProspectStatus;
  omboardingAttempts: number; //TODO: is this ok? or is it only for blackListed prospects and should have another entity?

  invoices: Invoice[]; //TODO: only for detail page
};
