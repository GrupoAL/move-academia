import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";
import { decryptUserData } from "../Utils/encrypt";
import { convertExercises } from "../Utils";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [canReturn, setCanReturn] = useState(true);
  const [loading, setLoading] = useState(true);
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
        Authorization: `Bearer ${data?.token}`,
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
  const decrypt = async () => {
    const stored = localStorage.getItem("@moveAcademy:userData");
    if (!stored) return null;

    try {
      const res = await decryptUserData(stored);
      if (res.token && res.user) {
        setData({
          user: res.user,
          token: res.token,
          isAdmin: res.isAdmin || false,
        });
      }
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      console.error("Error decrypting user data:", err);
      return null;
    }
  };

  useEffect(() => {
    decrypt();
  }, []);

  //Update user account settings ---------------------------------------------------
  const updateAccountSettings = async (data) => {
    console.log("Updating account settings with data:", data);
    const res = await api.patch("/account/settings", data, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return res.data;
  };

  //Get Video ---------------------------------------------------
  const getVideoByExercise = async (exerciseId) => {
    const res = await api.get(`/video/${exerciseId}`, {
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return res.data;
  };

  //get Categories ---------------------------------------------------
  const getCategories = async () => {
    const res = await api.get("/categories", {
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return res.data;
  };

  //create Category ---------------------------------------------------
  const createCategory = async (data) => {
    const res = await api.post("/categories", data, {
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return res.data;
  };

  //create Exercise ---------------------------------------------------
  const createExercise = async (data) => {
    const res = await api.post("/exercicios", data, {
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    return res.data;
  };

  //Get Exercises ---------------------------------------------------
  const getExercises = async (token) => {
    const res = await api.get("/exercicios", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const converted = convertExercises(res.data);
    return converted;
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        canAnimate,
        setCanAnimate,
        canReturn,
        setCanReturn,
        decrypt,
        loading,
        login,
        logout,
        register,
        getCategories,
        createCategory,
        createExercise,
        getVideoByExercise,
        updateAccountSettings,
        getExercises,
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
