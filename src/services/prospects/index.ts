import { NewProspectFormSchema } from "@/components/newProspectForm/schema";
import { z } from "zod";
// import { PROSPECTS_TAG } from "./constants";
// import { API_BASE_URL } from "../config";
// import { revalidateTag } from "next/cache";

export async function createProspect(
  values: z.infer<typeof NewProspectFormSchema>
) {
  const formData = new FormData();
  const {
    profilePhoto,
    document,
    address,
    bankAccountNumber,
    bankName,
    birthDate,
    email,
    lastName,
    name,
    phoneNumber,
    taxId,
    relevantDetails,
  } = values;

  formData.append("document", document);
  formData.append("name", name);
  formData.append("profilePhoto", profilePhoto);
  formData.append("bankAccountNumber", bankAccountNumber);
  formData.append("bankName", bankName);
  formData.append("birthDate", birthDate);
  formData.append("email", email);
  formData.append("lastName", lastName);
  formData.append("phoneNumber", phoneNumber);
  formData.append("taxId", taxId);
  formData.append("relevantDetails", relevantDetails ?? "");
  formData.append("country", address.country);
  formData.append("city", address.city);
  formData.append("fullAddress", address.fullAddress);
  formData.append("location", JSON.stringify(address.location));

  await new Promise((r) => setTimeout(r, 2000));
  if (name.includes("error")) {
    throw new Error("a");
  }

  //TODO: make request
  // revalidateTag(PROSPECTS_TAG);
  // return fetch(`${API_BASE_URL}/prospects`, {
  //   method: "POST",
  // });
}
