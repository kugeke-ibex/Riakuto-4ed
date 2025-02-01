import type { FC, SyntheticEvent } from "react";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const MoveButton: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/", { replace: true })}>
                跡形もなくトップへ
            </button>
            <button onClick={() => navigate(-1)}>戻る</button>
            <button onClick={() => navigate(1)}>進む</button>
        </>
    );
};
// Navigateコンポーネントは、指定されたパスにリダイレクトするコンポーネント。レンダリングされると、指定されたパスにリダイレクトされる
// useNavigateは、指定されたパスに遷移する関数。

export default MoveButton;
