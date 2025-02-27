import { z } from "zod";
import { NewProspectFormSchema } from "./schema";

export type Inputs = z.infer<typeof NewProspectFormSchema>;

export const USD = "United States dollar";

export const LAST_STEP_INDEX = 3;

export const STEP_INPUT_NAMES: (keyof Inputs)[][] = [
  ["name", "lastName", "birthDate", "email", "phoneNumber", "profilePhoto"],
  ["address"],
  ["bankName", "bankAccountNumber", "taxId", "document"],
  ["relevantDetails"],
];
