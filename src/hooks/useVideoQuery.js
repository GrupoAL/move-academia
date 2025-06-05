import { useQuery } from "@tanstack/react-query";
import { getVideoByExercise } from "../services/videos";

export const useVideo = (exerciseId) =>
  useQuery({
    queryKey: ["video", exerciseId],
    queryFn: () => getVideoByExercise(exerciseId),
    enabled: !!exerciseId,
  });
