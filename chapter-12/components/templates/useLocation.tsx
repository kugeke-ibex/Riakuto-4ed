import type { FC } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("UA-123456789-0");

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string; // ページを離れた後に戻ってきた時に、同じページかどうかを判断するためのキー
}

const App: FC = () => {
    const location = useLocation();

    // locationが変わるたびにGoogle Analyticsにページビューを送信
    React.useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search
        });
    }, [location.key]);

    return (
      // unmount時にReactGAの初期化を解除など
    )

}

export default App;
