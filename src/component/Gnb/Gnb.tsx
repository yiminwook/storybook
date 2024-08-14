import GnbItem from "./GnbItem";
import { Link } from "react-router-dom";

export default function Gnb() {
  return (
    <aside>
      <h1>
        <Link to="/">
          UI <sub>design</sub>
        </Link>
      </h1>
      <ul className="mainRoutes">
        <GnbItem name="1" href="/1" />
        <GnbItem name="2" href="/2">
          <GnbItem name="a" href="/2/a" />
          <GnbItem name="b" href="/2/b" />
          <GnbItem name="c" href="/2/c" />
        </GnbItem>
      </ul>
    </aside>
  );
}
