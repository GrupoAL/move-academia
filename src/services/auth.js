import { api } from "./api";

export const login = async (data) => {
  const res = await api.post("/login", data);
  return res.data;
};

export const logout = async () => {
  const res = await api.get("/logout");
  return res.data;
};

export const register = async (data) => {
  const res = await api.post("/register", data);
  return res.data;
};

export const ping = async () => {
  try {
    const res = await api.get("/");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error };
  }
};
