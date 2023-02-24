import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/*" element={<Navigate to={'/login'} />} />
        </Routes>
    )
}

export default MainRouter