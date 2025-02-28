"use server";

import { prospects } from "@/mockData/prospects";

export async function approveProspect(prospectId: string) {
  //TODO: make request
  console.log({ prospectId });
}

export async function rejectProspect(prospectId: string) {
  //TODO: make request
  console.log({ prospectId });
}

//TODO: add pagination
export async function getProspects() {
  return prospects;
}

export async function getProspect(id: string) {
  return prospects.find((prospect) => prospect.id === id);
}
