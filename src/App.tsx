import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GnbItem from "./component/GnbItem";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));
const Test1 = React.lazy(() => import("./page/test1"));
const Vanilla = React.lazy(() => import("./page/vanilla"));
const ToastContext = React.lazy(() => import("./page/toast/context"));
const ToastPortal = React.lazy(() => import("./page/toast/portal"));

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
          <GnbItem name="Toast" href="/toast">
            <GnbItem name="context" href="/toast/context" />
            <GnbItem name="portal" href="/toast/portal" />
          </GnbItem>
        </ul>
      </aside>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Preview />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/vanilla" element={<Vanilla />} />
          <Route path="/toast" element={<div>index</div>} />
          <Route path="/toast/context" element={<ToastContext />} />
          <Route path="/toast/portal" element={<ToastPortal />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
