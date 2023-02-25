import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";
import Search from "../explore/pages/Search";
import Profile from "../profile/pages/Profile";
import Ranking from "../ranking/pages/Ranking";
import Target from "../target/Target";
import AppMenu from "../ui/components/AppMenu";
import HomeInfo from "../ui/pages/HomeInfo";

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />

                {/* He decidido dejar la mayoría de los GET públicos para captar más usuarios */}
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/u/:username" element={<Profile />} />
                <Route path="/target" element={<Target />} />
                <Route path="/search" element={<Search />} />

                <Route path="/*" element={<Navigate to={'/login'} />} />
            </Routes>

            <AppMenu></AppMenu>
        </>

    )
}

export default MainRouter