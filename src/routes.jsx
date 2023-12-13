import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/home";
import Feed from "./components/Feed";
import Dashboard from "./components/seller/Dashboard";
import AllProducts from "./components/seller/AllProducts";
import AddProduct from "./components/seller/AddProduct";
import ViewProduct from "./components/products/ViewProduct";
import Cart from "./components/products/Cart";
import Checkout from "./components/products/Checkout";
import Offers from "./components/offers/Offers";
import Apply from "./components/offers/Apply";
import Products from "./components/products/Products";
import Profile from "./components/profile/profile";

export default function ROUTES() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/shop" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/product" element={<ViewProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/apply" element={<Apply />} />
        <Route exact path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
