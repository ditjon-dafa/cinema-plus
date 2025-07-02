import React from "react";
import { Result } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import "./feedback-to-user.css";

const FeedbackSearchGenre: React.FC = () => {
  const { theme } = useContext(GlobalContext);
  const nav = useNavigate();

  function handleGenresNavigation() {
    nav("/movies-by-genre");
  }

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
          <div
            style={{
              color: theme === "light" ? "black" : "white",
            }}
          >
            <h1>Sorry, your search key did not meet any genre!</h1>
            <h2>
              For a complete list of{" "}
              <span style={{ color: "orange" }}> Cinema + </span> genres, click{" "}
              <span onClick={handleGenresNavigation} className="link">
                {" "}
                here
              </span>
              !{" "}
            </h2>
          </div>
        }
      />
    </div>
  );
};

export default FeedbackSearchGenre;
