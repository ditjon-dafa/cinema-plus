import { Pagination } from "antd";

const MoviePages: React.FC = () => (
  <>
    <Pagination
      align="center"
      total={485}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
      onChange={(current) => `Current ${current}`}
    />
  </>
);

export default MoviePages;
