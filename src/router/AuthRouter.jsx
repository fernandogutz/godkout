import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";
import AppRouter from "./AppRouter";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
    )
}

export default MainRouter