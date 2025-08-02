import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Pagination } from "antd";
import "../components/movie-list/movie-list.css";

interface Props {
  totalPages: number;
}

export default function PaginationDesign(props: Props) {
  const { currentPage, setCurrentPage } = useContext(GlobalContext);
  const { setPagePart } = useContext(GlobalContext);
  return (
    <>
      <Pagination
        align="center"
        total={props.totalPages}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={20}
        defaultCurrent={currentPage}
        onChange={(current) => {
          setCurrentPage(current);
          setPagePart(1);
        }}
        className="pagination-style"
      />
    </>
  );
}
