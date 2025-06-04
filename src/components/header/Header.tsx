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
        backgroundColor:
          theme === "light" ? "rgb(225, 225, 225)" : "rgb(70, 70, 70)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div id="cinema-name">
        <h1>
          {" "}
          <Link to={navItems[0].path} id="cinema-name-heading">
            {" "}
            Cinema +{" "}
          </Link>
        </h1>
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
