import React from "react";
import { Result } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../components/search-genre-or-movie/components/search-movie/search-movie-list.css";
import "./feedback-to-user.css";

const FeedbackSearchMovie: React.FC = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      className="search-movie-list-screen feedback-display"
      style={{
        backgroundColor:
          theme === "light" ? "rgb(240, 240, 240)" : "rgb(80, 80, 80)",
      }}
    >
      <Result
        status="404"
        title={
          <p style={{ color: theme === "light" ? "black" : "white" }}>"404"</p>
        }
        subTitle={
          <h1
            style={{
              color: theme === "light" ? "black" : "white",
            }}
          >
            Sorry, your search key for movie did not meet any match!
          </h1>
        }
      />
    </div>
  );
};

export default FeedbackSearchMovie;
