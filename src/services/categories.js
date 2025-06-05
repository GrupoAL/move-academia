import { api } from "./api";

export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};

export const createCategory = async (data) => {
  const res = await api.post("/categories", data);
  return res.data;
};

export const createExercise = async (data) => {
  const res = await api.post("/exercises", data);
  return res.data;
};
