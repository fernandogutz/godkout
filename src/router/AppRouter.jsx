import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "../ui/pages/NotFound";
import Profile from "../profile/pages/Profile";
import Ranking from "../ranking/pages/Ranking";
import Target from "../target/Target";
import Search from "../explore/pages/Search";
import AppMenu from "../ui/components/AppMenu";
import Settings from "../ui/pages/Settings";
import CreateMark from "../mark/pages/CreateMark";
import HomeInfo from "../ui/pages/HomeInfo";
import EditProfile from "../profile/pages/EditProfile";
import EditAvatar from "../profile/pages/EditAvatar";

const AppRouter = () => {
    return (
        <>  
            <Routes>
                <Route path="/" element={<HomeInfo></HomeInfo>} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/u/:username" element={<Profile />} />
                <Route path="/target" element={<Target />} />
                <Route path="/search" element={<Search />} />
                <Route path="/create-mark" element={<CreateMark />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings/edit-profile" element={<EditProfile></EditProfile>} />
                <Route path="/settings/edit-avatar" element={<EditAvatar></EditAvatar>} />

                <Route path="/login" element={<Navigate to={'/ranking'} />} />
                <Route path="/sign-up" element={<Navigate to={'/ranking'} />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <AppMenu></AppMenu>
        </>
    )
}

export default AppRouter