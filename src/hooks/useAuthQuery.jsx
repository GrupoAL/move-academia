import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "../contexts/index";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, setData } = useAppContext();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { user, token } = data;
      localStorage.setItem("@moveAcademy:user", user.nome);
      localStorage.setItem("@moveAcademy:token", token);

      if (token && user) {
        setData({
          user: user.nome,
          token,
        });
      }
      navigate("/welcome");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  const { logout, setData } = useAppContext();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("@moveAcademy:user");
      localStorage.removeItem("@moveAcademy:token");
      setData({});
      navigate("/bye");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};

export const useRegister = () => {
  const { register } = useAppContext();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      console.log("Registration successful:");
    },
    onError: () => {
      console.error("Registration failed:");
    },
  });
};

// export const usePing = () =>
//   useQuery({
//     queryKey: ["ping"],
//     queryFn: ping,
//     retry: 0,
//     refetchOnWindowFocus: false,
//   });
