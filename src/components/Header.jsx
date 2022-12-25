import { Link } from "react-router-dom";
import Toggle from "./Toogle";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <Toggle />
      </nav>
    </header>
  );
}