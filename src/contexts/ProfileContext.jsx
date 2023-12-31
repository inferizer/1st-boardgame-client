import { createContext, useState } from "react";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export const ProfileContext = createContext();

export default function ProductContextProvider({ children }) {
  const [getWishList, setGetWishList] = useState([]);
  const [checkUpdateWishList, setUpdateWishList] = useState(false);
  const [updateProfile, setUpdateProfile] = useState({
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const editProfile = async (editData) => {
    const res = await axios.post("/profile/edit", editData);
    return res.data.updateProfile;
  };

  const addToWishList = async (wishListData) => {
    const res = await axios.post("/profile/wishlist", wishListData);
  };

  const removeWishList = async (removeId) => {
    const res = await axios.delete(`profile/remove-wishlist/${removeId}`);
  };

  const contextValue = {
    updateProfile,
    setUpdateProfile,
    checkUpdateWishList,
    setUpdateWishList,
    getWishList,
    setGetWishList,
    editProfile,
    addToWishList,
    removeWishList,
  };
  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
}
