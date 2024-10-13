import { Switch } from "antd"; //OK
import "./header.css";
import { MoonOutlined, SunOutlined } from "@ant-design/icons"; //OK
// import SearchBar from "./components/SearchBar";
import { Link, useLocation } from "react-router-dom"; //OK
// import { useNavigate, Link } from "react-router-dom"; //OK
import { useContext } from "react"; //OK
import { GlobalContext } from "../../context/GlobalContext"; //OK
import SearchBar from "./components/SearchBar";

export default function Header() {
  //   const nav = useNavigate();
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
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      {/* <img
        onClick={() => nav("/")}
        src={theme === "light" ? "/anime-logo.png" : "/logo-dark.jpg"}
        alt="anime logo"
      /> */}
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
      <SearchBar />
      <div>
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
  //   return (
  //
  //     // logo
  //     //Movie search
  //     //Home page link
  //     //Favorites link
  //   );
}
