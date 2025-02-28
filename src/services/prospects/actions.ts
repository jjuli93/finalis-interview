"use server";

import { prospects } from "@/mockData/prospects";
import { Pagination } from "@/types/Pagination";
import { ProspectStatus } from "@/types/Prospect";
// import { revalidateTag } from "next/cache";
// import { API_BASE_URL } from "../config";
// import { PROSPECTS_TAG } from "./constants";
// import { revalidateTag } from "next/cache";

export async function approveProspect(prospectId: string) {
  console.log({ prospectId });

  //TODO: make request
  // revalidateTag(PROSPECTS_LIST_TAG);
  // return fetch(`${API_BASE_URL}/prospects/${prospectId}/approve`, {
  //   method: "POST",
  // });
}

export async function rejectProspect(prospectId: string) {
  console.log({ prospectId });

  //TODO: make request
  // revalidateTag(PROSPECTS_LIST_TAG);
  // return fetch(`${API_BASE_URL}/prospects/${prospectId}/reject`, {
  //   method: "POST",
  //   next: { tags: [PROSPECTS_LIST_TAG] },
  // });
}

type GetProspectsParams = {
  status?: ProspectStatus;
  blacklisted?: boolean;
  page?: number;
  pageSize?: number;
};

export async function getProspects({
  status,
  blacklisted,
  page = 1,
  pageSize = 50,
}: GetProspectsParams) {
  //TODO: make request
  // return fetch(`${API_BASE_URL}/prospects`, {
  //   next: { tags: [PROSPECTS_LIST_TAG] },
  // });

  const filteredProspects = prospects
    .filter((prospect) => !status || prospect.status === status)
    .filter((prospect) => !blacklisted || prospect.blacklisted === blacklisted);

  const totalPages = Math.ceil(filteredProspects.length / pageSize);

  const startPosition = (page - 1) * pageSize;

  const prospectsPage = filteredProspects.slice(
    startPosition,
    Math.min(page * pageSize, filteredProspects.length)
  );

  const pagination: Pagination = {
    page,
    pageSize,
    totalPages,
  };

  return { prospects: prospectsPage, pagination };
}

export async function getProspect(id: string) {
  //TODO: make request
  // return fetch(`${API_BASE_URL}/prospects/${id}`, {
  //   next: { tags: [PROSPECTS_LIST_TAG] },
  // });

  return prospects.find((prospect) => prospect.id === id);
}
