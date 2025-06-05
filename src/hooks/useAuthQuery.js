import { useMutation, useQuery } from "@tanstack/react-query";
import { login, logout, ping, register } from "../services/auth";

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useLogout = () =>
  useMutation({
    mutationFn: logout,
  });

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });

export const usePing = () =>
  useQuery({
    queryKey: ["ping"],
    queryFn: ping,
    retry: 0,
    refetchOnWindowFocus: false,
  });
