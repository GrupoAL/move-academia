import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "../contexts/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, setData } = useAppContext();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { user, token } = data;

      if (token && user) {
        setData({
          user: user.nome,
          token,
          isAdmin: user?.isAdmin || false,
        });
      }

      localStorage.setItem("@moveAcademy:user", user.nome);
      localStorage.setItem("@moveAcademy:token", token);

      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.error || "Login failed. Please try again."
      );
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
      navigate("/");
    },
    onError: (error) => {
      navigate("/");
      toast.error(
        error.response?.data?.error || "Logout failed. Redirecting to login."
      );
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
