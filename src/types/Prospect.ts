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
  location: {
    lat: number;
    lng: number;
  };
  bankName: string;
  bankAccountNumber: string;
  taxId: string;
  document: string;
  relevantDetails: string;

  status: ProspectStatus;
  blacklisted: boolean;
  onboardingAttempts: number;
};
