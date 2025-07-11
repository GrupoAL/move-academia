import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  const [canAnimate, setCanAnimate] = useState({
    run: false,
    message: "",
  });

  //Login user ---------------------------------------------------
  const login = async (data) => {
    const res = await api.post("/login", data);
    return res.data;
  };

  //logout user ---------------------------------------------------
  const logout = async () => {
    const res = await api.get("/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  //register user ---------------------------------------------------
  const register = async (data) => {
    const res = await api.post("/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  };

  //manage user data ---------------------------------------------------
  useEffect(() => {
    const user = localStorage.getItem("@moveAcademy:user");
    const token = localStorage.getItem("@moveAcademy:token");

    if (token && user) {
      setData({
        user: user?.nome,
        token,
      });
    }
  }, []);

  //Update user account settings ---------------------------------------------------
  const updateAccountSettings = async (data) => {
    console.log("Updating account settings with data:", data);
    const res = await api.patch("/account/settings", data, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  //Get Video ---------------------------------------------------
  const getVideoByExercise = async (exerciseId) => {
    const res = await api.get(`/video/${exerciseId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  //get Categories ---------------------------------------------------
  const getCategories = async () => {
    const res = await api.get("/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  //create Category ---------------------------------------------------
  const createCategory = async (data) => {
    const res = await api.post("/categories", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  //create Exercise ---------------------------------------------------
  const createExercise = async (data) => {
    const res = await api.post("/exercises", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@moveAcademy:token")}`,
      },
    });
    return res.data;
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        canAnimate,
        setCanAnimate,
        login,
        logout,
        register,
        getCategories,
        createCategory,
        createExercise,
        getVideoByExercise,
        updateAccountSettings,
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
