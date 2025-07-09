import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SearchBar from "./components/SearchBar";
import darkLogo from "../../images/cinema-plus-dark.png";
import lightLogo from "../../images/cinema-plus-light.png";
import "./header.css";

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
      label: "Movies by Genre",
      path: "/movies-by-genre",
    },
    {
      label: "My favorites",
      path: "/favorites",
    },
  ];

  return (
    <header
      style={{
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div id="cinema-logo">
        {theme === "light" ? (
          <Link to={navItems[0].path}>
            {" "}
            <img src={lightLogo} alt="" className="logo" />{" "}
          </Link>
        ) : (
          <Link to={navItems[0].path}>
            {" "}
            <img src={darkLogo} alt="" className="logo" />{" "}
          </Link>
        )}
      </div>

      <div id="menu">
        {navItems.map((item) => {
          return (
            <div key={item.path} id="${item.label}">
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
            </div>
          );
        })}
      </div>

      <div id="search">
        <SearchBar />
      </div>
      <div id="theme">
        <Switch
          className="switch-background-color"
          onChange={(checked) => {
            if (checked) {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked={theme === "light"}
        />
      </div>
    </header>
  );
}
