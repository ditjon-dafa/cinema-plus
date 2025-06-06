import "./basic-info.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BasicInfo() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
      className="intro"
    >
      <h1> Discover our top rated movies!</h1>
    </div>
  );
}
