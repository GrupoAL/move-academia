import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "../contexts";

export const useUpdateAccountSettings = () => {
  const { updateAccountSettings } = useAppContext();

  return useMutation({
    mutationFn: updateAccountSettings,
    onSuccess: (data) => {
      console.log("Account settings updated successfully:", data);
    },
    onError: (error) => {
      console.error("Failed to update account settings:", error);
    },
  });
};
