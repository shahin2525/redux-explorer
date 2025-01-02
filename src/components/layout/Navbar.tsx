import Logo from "@/assets/Logo";

import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-10 flex gap-3 items-center justify-center px-5">
      <div>
        <Logo></Logo>
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
