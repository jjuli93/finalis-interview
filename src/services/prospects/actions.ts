"use server";

import { prospects } from "@/mockData/prospects";
import { Pagination } from "@/types/Pagination";
import { ProspectStatus } from "@/types/Prospect";

export async function approveProspect(prospectId: string) {
  //TODO: make request
  console.log({ prospectId });
}

export async function rejectProspect(prospectId: string) {
  //TODO: make request
  console.log({ prospectId });
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
  return prospects.find((prospect) => prospect.id === id);
}
