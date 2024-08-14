import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "./component/Gnb/Gnb";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));
const Test1 = React.lazy(() => import("./page/test1"));
const Vanilla = React.lazy(() => import("./page/vanilla"));

export default function App() {
  return (
    <BrowserRouter>
      <Gnb />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Preview />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/vanilla" element={<Vanilla />} />
          <Route
            path="*"
            element={
              <div>
                <div>
                  <a href="/">홈으로 돌아가기</a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
