import { Route, Routes } from "react-router";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import PaymentConfirmationPage from "../pages/payment-confirmation";
import AboutUs from "../pages/about-us";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifting" element={<Dashboard />} />
      <Route
        path="/gifting/payment-confirmation"
        element={<PaymentConfirmationPage />}
      />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Router;
