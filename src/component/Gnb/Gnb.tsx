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
        <GnbItem name="test1" href="/test1" />
        <GnbItem name="vanilla" href="/vanilla" />
      </ul>
    </aside>
  );
}
