import React from "react";
import { Result } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const FeedbackMoviesByAGenre: React.FC = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="feedback-display">
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
            Sorry, there are no movies data for this genre!
          </h1>
        }
      />
    </div>
  );
};

export default FeedbackMoviesByAGenre;
