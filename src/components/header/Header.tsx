import { Switch } from "antd";
import "./header.css";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SearchBar from "./components/SearchBar";

export default function Header() {
  const { theme, setTheme } = useContext(GlobalContext);
  const location = useLocation();

  const linkStyles = {
    color: theme === "light" ? "black" : "white",
  };

  const navItems = [
    {
      label: "Home",
      path: "/",
    },

    {
      label: "My favorites",
      path: "/favorites",
    },
  ];

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "antiquewhite" : "gray",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div id="cinema-name">
        <h1 style={{ color: "orange" }}> Cinema + </h1>
      </div>

      <div id="menu">
        <nav>
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    style={linkStyles}
                    to={item.path}
                    className={
                      item.path === location.pathname
                        ? "menu-item active"
                        : "menu-item"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div id="search">
        <SearchBar />
      </div>
      <div id="theme">
        <Switch
          onChange={(checked) => {
            if (checked) {
              return setTheme("light");
            }
            setTheme("dark");
          }}
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked={theme === "light"}
        />
      </div>
    </header>
  );
}
