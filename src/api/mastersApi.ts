import { Master } from "../types/types";
import publicApi from "./publicApi";

const featchMasters = async () => {
  return publicApi.get("/masters") as Promise<{ data: Master[] }>;
};

export const mastersApi = {
  featchMasters,
};
