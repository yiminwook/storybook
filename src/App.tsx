import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));

export default function App() {
  const pathname = useLocation().pathname;
  console.log("path", pathname);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Preview />} />
      <Route path="*" element={<div>404 페이지를 찾을 수 없습니다.</div>} />
    </Routes>
  );
}
