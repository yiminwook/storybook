import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GnbItem from "./component/GnbItem";

const Home = React.lazy(() => import("./page/home"));
const Preview = React.lazy(() => import("./page/preview"));
const Test1 = React.lazy(() => import("./page/test1"));
const Vanilla = React.lazy(() => import("./page/vanilla"));
const ToastContext = React.lazy(() => import("./page/toast/context"));
const ToastPortal = React.lazy(() => import("./page/toast/portal"));
const ToastVanilla = React.lazy(() => import("./page/toast/vanilla"));
const ModalContext = React.lazy(() => import("./page/modal/context"));
const ModalPortal = React.lazy(() => import("./page/modal/portal"));
const ModalHtml = React.lazy(() => import("./page/modal/html"));
const ModalVanilla = React.lazy(() => import("./page/modal/vanilla"));

export default function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === "development" ? "/" : "/story"}>
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
            <GnbItem name="vanilla" href="/toast/vanilla" />
          </GnbItem>
          <GnbItem name="Modal" href="/modal">
            <GnbItem name="context" href="/modal/context" />
            <GnbItem name="portal" href="/modal/portal" />
            <GnbItem name="html" href="/modal/html" />
            <GnbItem name="vanilla" href="/modal/vanilla" />
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
          <Route path="/toast/vanilla" element={<ToastVanilla />} />
          <Route path="/modal" element={<div>index</div>} />
          <Route path="/modal/context" element={<ModalContext />} />
          <Route path="/modal/portal" element={<ModalPortal />} />
          <Route path="/modal/html" element={<ModalHtml />} />
          <Route path="/modal/vanilla" element={<ModalVanilla />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
