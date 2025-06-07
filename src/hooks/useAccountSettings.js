import { useMutation } from "@tanstack/react-query";
import { updateAccountSettings } from "../contexts/index";

export const useUpdateAccountSettings = () =>
  useMutation({
    mutationFn: updateAccountSettings,
  });
