import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/home";
import Feed from "./components/Feed";
// import AuthLayout from "./layouts/AuthLayout";

// import MyBookings from "../Components/Events/MyBookings";

export default function ROUTES() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/shop" element={<Home />} />
      </Route>
      {/* 
      <Route
        exact
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      /> */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
