import useDataFetch from "../common/useDataFetch";
import { useLocation } from "react-router-dom";
import ListWithHeader from "../common/ListWithHeader";

const DetailList = ({ getClickedItem }) => {
  const { data, loading } = useDataFetch("todos");
  const { state } = useLocation();
  console.log("state", state);
  return (
    <>
      <ListWithHeader
        title="Todos"
        route="todo-data"
        list={{
          loading: loading,
          data: data,
          columns: [
            { header: "Id", access: "id" },
            { header: "Title", access: "title" },
            { header: "User Id", access: "userId" },
          ],
          getClickedItem: getClickedItem,
        }}
      />
    </>
  );
};
export default DetailList;
