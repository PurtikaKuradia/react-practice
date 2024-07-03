import ListWithHeader from "../common/ListWithHeader";
import { useLocation } from "react-router-dom";
import useDataFetch from "../common/useDataFetch";

const TodosList = () => {
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
        }}
      />
    </>
  );
};
export default TodosList;
