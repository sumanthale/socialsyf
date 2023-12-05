import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/home";
import Test from "./Test";
// import AuthLayout from "./layouts/AuthLayout";

// import MyBookings from "../Components/Events/MyBookings";

export default function ROUTES() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
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
