import type { FC } from "react";
import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Users from "../components/templates/Users";
import SelfProfile from "../components/templates/SelfProfile";
import UserProfile from "../components/templates/UserProfile";

const App: FC = () => (
    <Routes>
        <Route path="/users" element={<Users />}>
            <Route path="me" element={<SelfProfile />} />
            <Route path=":userid" element={<UserProfile />} />
        </Route>
        <Route path="/" element={<Home />} />
    </Routes>
);

const Users: FC = () => (
  <div>
    <h2>プロフィール</h2>
    <Outlet />
    /** /users/me や /users/123 のパスに応じて<SelfProfile />コンポーネント、<UserProfile />コンポーネントに切り替える */
  </div>
)

export default App;
