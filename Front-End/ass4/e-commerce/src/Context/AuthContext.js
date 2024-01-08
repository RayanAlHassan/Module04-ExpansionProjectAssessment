
// withe cookies not local storage 
import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../e-commerce/src/Utils/AxiosInstance.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    if (!user && user === null) {
      fetchUserData();
    } else {
      console.log("user:",user);
    }
  }, [user]);

  const fetchUserData = async () => {
    
    try {
      setCheckUser(true);
      const response = await axiosInstance.get(
        `http://localhost:5000/user/view-all`
      );
      setUser(response.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setCheckUser(false);
    }
  };

  const logout = async () => {
    try{

  
          await axiosInstance.post("http://localhost:5000/user/logout");
    setUser(null);
      } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, checkUser, fetchUserData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};