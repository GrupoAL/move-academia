import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@moveAcademy:user", JSON.stringify(user));
      localStorage.setItem("@moveAcademy:token", token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({
        user,
        token,
      });
    } catch (error) {
      alert("Unable to log in");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@moveAcademy:user");
    localStorage.removeItem("@moveAcademy:token");
    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@moveAcademy:user");
    const token = localStorage.getItem("@moveAcademy:token");

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, data }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
