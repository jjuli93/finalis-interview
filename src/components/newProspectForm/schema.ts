import { z } from "zod";

export const NewProspectFormSchema = z.object({
  name: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  birthDate: z.string().min(1, "Required"),
  email: z.string().email(),
  // TODO: validate phone
  phoneNumber: z.string().min(1, "Required"),
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
  bankName: z.string().min(1, "Required"),
  // TODO: should this be a number?
  bankAccountNumber: z.string().min(1, "Required"),
  taxId: z.string().min(1, "Required"),
  relevantDetails: z.string().optional(),
});
