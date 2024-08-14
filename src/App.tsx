import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Preview />} />
      hello
    </Routes>
  );
}
