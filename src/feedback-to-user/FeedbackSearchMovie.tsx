import React from "react";
import { Result } from "antd";

const FeedbackSearchMovie: React.FC = () => {
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
        title="404"
        subTitle={
          <h1
            style={{
              color: "black",
            }}
          >
            Sorry, your search did not meet any match.
          </h1>
        }

        // extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default FeedbackSearchMovie;
