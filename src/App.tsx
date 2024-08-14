import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GnbItem from "./component/GnbItem";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));
const Test1 = React.lazy(() => import("./page/test1"));
const Vanilla = React.lazy(() => import("./page/vanilla"));

export default function App() {
  return (
    <BrowserRouter>
      <aside>
        <h1>
          <Link to="/">
            UI <sub>design</sub>
          </Link>
        </h1>
        <ul className="mainRoutes">
          <GnbItem name="test1" href="/test1" />
          <GnbItem name="vanilla" href="/vanilla" />
        </ul>
      </aside>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Preview />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/vanilla" element={<Vanilla />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
