import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Appコンポーネントをインポート

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// <BrowserRouter>: History APIを使用してブラウザのURLを管理するためのコンポーネント
// <HashRouter>: URLのハッシュ部分を使用してブラウザのURLを管理するためのコンポーネント
// <MemoryRouter>: URLが変更せずに、メモリ上にURLを管理するためのコンポーネント。ReactNativeと組み合わせてテストするときに使用
// <NativeRouter>: ReactNativeで使用
// <StaticRouter>: 静的なコンテンツを管理するためのコンポーネント。サーバーサイドレンダリングで使用
//
