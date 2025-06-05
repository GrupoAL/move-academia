import { useMutation } from "@tanstack/react-query";
import { updateAccountSettings } from "../services/account";

export const useUpdateAccountSettings = () =>
  useMutation({
    mutationFn: updateAccountSettings,
  });
