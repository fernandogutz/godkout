import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "../ui/pages/NotFound";
import Profile from "../profile/pages/Profile";
import Ranking from "../ranking/pages/Ranking";
import Target from "../target/Target";
import Search from "../explore/pages/Search";
import AppMenu from "../ui/components/AppMenu";
import Settings from "../ui/pages/Settings";
import CreateMark from "../mark/pages/CreateMark";

const AppRouter = () => {
    return (
        <>  
            <Routes>
                <Route path="/" element={<Navigate to={'/ranking'} />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/u/:username" element={<Profile />} />
                <Route path="/target" element={<Target />} />
                <Route path="/search" element={<Search />} />
                <Route path="/create-mark" element={<CreateMark />} />
                <Route path="/settings" element={<Settings />} />

                <Route path="/login" element={<Navigate to={'/ranking'} />} />
                <Route path="/sign-up" element={<Navigate to={'/ranking'} />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <AppMenu></AppMenu>
        </>
    )
}

export default AppRouter