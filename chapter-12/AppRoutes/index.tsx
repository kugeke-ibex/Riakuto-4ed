import type { FC } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/templates/Home";
import About from "../components/templates/About";
import StaffProfile from "../components/templates/StaffProfile";
import { PostList, Post } from "features/blog";

const AppRoutes: FC = () => (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/staff">
            <Route path=":id" element={<StaffProfile />} />
        </Route>
        <Route path="blog">
            <Route path="" element={<PostList />} />
            <Route path="post/*" element={<Post />} />
            <Route path="*" element={<PostNotFound />} /> /** 404ページ */
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace/>} /> /** リダイレク  replace属性が有効だと、locationの履歴はhistoryに残らない*/
    </Routes>
);

// パスの記述注意点
// ・　末尾に/をつけても無視される
// ・一般的なglobや正規表現は使用できない
// ・ワイルドカードは*のみ使用可能だが、末尾のみ
// 大文字・小文字はRouteコンポーネントにcaseSensitiveを指定することで変更可能

export default AppRoutes;
