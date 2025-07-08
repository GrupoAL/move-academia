import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "../contexts/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login, setData, setCanAnimate } = useAppContext();

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
      setCanAnimate({
        run: true,
        message: `Bem vindo, ${user.nome.split(" ")[0]}!`,
      });
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

  const { logout, setData, setCanAnimate } = useAppContext();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setData({});
      localStorage.removeItem("@moveAcademy:user");
      localStorage.removeItem("@moveAcademy:token");
      setCanAnimate({
        run: true,
        message: `Até mais!`,
      });
      navigate("/");
    },
    onError: (error) => {
      navigate("/");
      localStorage.removeItem("@moveAcademy:user");
      localStorage.removeItem("@moveAcademy:token");
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
