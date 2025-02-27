import { z } from "zod";

export const NewProspectFormSchema = z.object({
  name: z.string().min(1),
  lastName: z.string().min(1),
  birthDate: z.string().min(1),
  email: z.string().min(1),
  phoneNumber: z.string().min(1),
  profilePhoto: z.instanceof(File, { message: "Profile photo is required" }),
  document: z.instanceof(File, { message: "Document or passport is required" }),
  address: z.object(
    {
      location: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      fullAddress: z.string(),
      country: z.string(),
      city: z.string(),
    },
    { message: "Address not valid" }
  ),
  bankName: z.string().min(1),
  bankAccountNumber: z.string().min(1),
  taxId: z.string().min(1),
  relevantDetails: z.string().optional(),
});
