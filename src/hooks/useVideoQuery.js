import { useQuery } from "@tanstack/react-query";
import { getVideoByExercise } from "../contexts/index";

export const useVideo = (exerciseId) =>
  useQuery({
    queryKey: ["video", exerciseId],
    queryFn: () => getVideoByExercise(exerciseId),
    enabled: !!exerciseId,
  });
