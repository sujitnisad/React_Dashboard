import { Link } from "react-router-dom";
import "./Menu.css";
import { HiHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { TbReportAnalytics } from "react-icons/tb";
import { LuWallet2 } from "react-icons/lu";
import { PiBagBold } from "react-icons/pi";
const Menu = () => {
  return (
    <ul className="menu--list">
      <li className="menu--list-item">
        <Link to="/">
          <HiHome />
        </Link>
      </li>
      <li className="menu--list-item">
        <Link to="/">
          <VscGraph />
        </Link>
      </li>
      <li className="menu--list-item">
        <Link to="/">
          <TbReportAnalytics />
        </Link>
      </li>
      <li className="menu--list-item">
        <Link to="/">
          <LuWallet2 />
        </Link>
      </li>
      <li className="menu--list-item">
        <Link to="/">
          <PiBagBold />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
