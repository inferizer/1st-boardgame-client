// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import AdminContextProvider from "./contexts/AdminContext.jsx";
import ProfileContextProvider from "./contexts/ProfileContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ProductContextProvider>
      <AdminContextProvider>
        <ProfileContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProfileContextProvider>
      </AdminContextProvider>
    </ProductContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
