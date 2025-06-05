import { api } from "./api";

export const updateAccountSettings = async (data) => {
  const res = await api.patch("/account/settings", data);
  return res.data;
};
