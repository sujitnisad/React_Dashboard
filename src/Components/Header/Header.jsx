import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">Dashboard</h2>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <IoSearchOutline className="search-icon" />
      </div>
      <div className="user-box">
        {/* <MdOutlineEmail className="user--icon" /> */}

        <FaRegBell className="user--icon" />

        <IoSettingsOutline className="user--icon" />
        <CgProfile className="user--icon" />
      </div>
    </div>
  );
};

export default Header;
