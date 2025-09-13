import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "../contexts/index";

// export const useExercises = () =>
//   useQuery({
//     queryKey: ["exercicios"],
//     queryFn: getCategories,
//   });

export const useGetExercises = () => {
  const { getExercises, data } = useAppContext();

  return useQuery({
    queryKey: ["exercicios"],
    queryFn: () => getExercises(data?.token),
    enabled: !!data?.token,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

// export const useCreateExercise = () =>
//   useMutation({
//     mutationFn: createExercise,
//   });
