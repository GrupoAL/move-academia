import { api } from "./api";

export const getVideoByExercise = async (exerciseId) => {
  const res = await api.get(`/video/${exerciseId}`);
  return res.data;
};
