import { lazy, Suspense } from "react";

const Other = lazy(() => import("./Other"));

const App = () => {
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Other />
    </Suspense>
  </div>
};

export default App;
