import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalContext";
import "../../../../basic-info/basic-info.css";

export default function SearchGenreHeader() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p className="intro"> Genre Search Result: </p>
    </div>
  );
}
