import { useState } from "react";
import Dropdown from "./Dropdown";
// import { FaCaretRight, FaCaretDown } from "react-icons/fa";
//import FaCaretRight from "@react-icons/all-files/fa/FaCaretRight";
// import FaCaretDown from "@react-icons/all-files/fa/FaCaretDown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            className="text-white lg:text-default lg:px-5 text-xl"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div className="flex">
              {items.title}

              {dropdown ? (
                <FontAwesomeIcon icon={faCaretDown} className="mt-1 pl-1" />
              ) : (
                <FontAwesomeIcon icon={faCaretRight} className="mt-1 pl-1" />
              )}
            </div>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a
          className="text-white mt-4 text-xl lg:text-default lg:px-5 lg:mt-0 hover:underline"
          href={items.url}
        >
          {items.title}
        </a>
      )}
    </li>
  );
};

export default Menu;
