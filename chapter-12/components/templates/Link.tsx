import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Links: FC = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">トップページ</Link>
            </li>
            <li>
                <Link
                    to={{
                        pathname: "/contact",
                        search: "?from=here",
                        hash: "#subject",
                    }}
                    state={{ secret: "8yUfa9KECH" }} // ユーザーには見えない
                >
                    お問い合わせ
                </Link>
            </li>
            <li>
                <Link to="/anywhere" replace>
                    今ここではないどこか
                </Link>
            </li>
        </ul>
    </nav>
);

export default Links;
