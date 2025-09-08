import { Master } from "../types/types";
import publicApi from "./publicApi";

const fetchMasters = async () => {
  return publicApi.get("/masters") as Promise<{ data: Master[] }>;
};

const fetchInformationMaster = async (id: string) => {
  return publicApi.get(`/masters/${id}`) as Promise<{ data: Master }>;
};

export const mastersApi = {
fetchMasters,
fetchInformationMaster,
};
