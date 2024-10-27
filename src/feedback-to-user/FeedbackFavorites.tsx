import React from "react";
import { Result } from "antd";

const FeedbackFavorites: React.FC = () => {
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
            Sorry, there are no favorites movies in the list.
          </h1>
        }

        // extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default FeedbackFavorites;
