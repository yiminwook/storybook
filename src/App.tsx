import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "./component/Gnb/Gnb";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));

export default function App() {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Preview />} />
        hello
      </Routes>
    </BrowserRouter>
  );
}
