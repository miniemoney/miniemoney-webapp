import { Route, Routes } from "react-router"
import Home from "../pages/home"
import Dashboard from "../pages/dashboard"
import PaymentConfirmationPage from "../pages/payment-confirmation/page"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gifting" element={<Dashboard />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
        </Routes>
    )
}

export default Router