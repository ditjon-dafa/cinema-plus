import React from "react";
import { Result } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const FeedbackSearchMovie: React.FC = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            Sorry, your search did not meet any match!
          </h1>
        }
      />
    </div>
  );
};

export default FeedbackSearchMovie;
