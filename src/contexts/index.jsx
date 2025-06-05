import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const ping = async () => {
    const res = await api.post("/");
    return res.data;
  };

  const login = async (credentials) => {
    const res = await api.post("/login", credentials);
    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await api.get("/logout");
    setUser(null);
  };

  const register = async (userData) => {
    const res = await api.post("/register", userData);
    return res.data;
  };

  const getCategories = async () => {
    const res = await api.get("/categories");
    return res.data;
  };

  const createCategory = async (data) => {
    const res = await api.post("/categories", data);
    return res.data;
  };

  const createExercise = async (data) => {
    const res = await api.post("/exercises", data);
    return res.data;
  };

  const getVideoByExercise = async (exerciseId) => {
    const res = await api.get(`/video/${exerciseId}`);
    return res.data;
  };

  const updateAccountSettings = async (data) => {
    const res = await api.patch("/account/settings", data);
    return res.data;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        getCategories,
        createCategory,
        createExercise,
        getVideoByExercise,
        updateAccountSettings,
        ping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
