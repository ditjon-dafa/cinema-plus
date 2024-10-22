import "./basic-info.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BasicInfo() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
      className="intro"
    >
      <h1 style={{ color: "orange" }}> Cinema + </h1>
      <h3> Discover our top rated movies!</h3>
    </div>
  );
}
