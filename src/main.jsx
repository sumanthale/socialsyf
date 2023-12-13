import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import NavigationScroll from "./layouts/ScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <NavigationScroll>
        <Toaster
          toastOptions={{
            duration: 5000,
          }}
        />
        <App />
      </NavigationScroll>
    </AuthProvider>
  </BrowserRouter>
);
