import { useState } from "react";
import { FC, SyntheticEvent } from "react";
import { flushSync } from "react-dom";

const App: FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = (event: SyntheticEvent) => {
    event.stopPropagation();
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  // 上記の場合だと、handleClickが実行された際に、countが3回+1されて3回再レンダリングが起きるわけではない。
  // +3されて再レンダリングは1回

  const handleClick2 = (event: SyntheticEvent) => {
    event.stopPropagation();

    setTimeout(() => {
      setCount((c) => c + 1);
      setCount((c) => c + 1);
      setCount((c) => c + 1);
    }, 1000);
  };
  // 上記の場合だと、handleClick2が実行された際に、countが3回+1されて3回再レンダリングが起きる。
  // React18では、Concurrent Renderingが導入され、
  // 上記のような場合でも、1回の再レンダリングでcountが+3される。

  const handleClick3 = (event: SyntheticEvent) => {
    event.stopPropagation();

    setTimeout(() => {
      flushSync(() => setCount((c) => c + 1));
      flushSync(() => setCount((c) => c + 1));
      flushSync(() => setCount((c) => c + 1));
    }, 1000);
  };
  // 上記の場合だと、handleClick3が実行された際に、countが3回+1されて3回再レンダリングが起きる。
}
