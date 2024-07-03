import { useLocation } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import Loader from "./Loader";

const TodoData = () => {
  const { state } = useLocation();
  const { id } = state;
  const { data, loading, error } = useDataFetch(`todos/${id}`);
  console.log("todos details", data, error);
  return (
    <Loader loading={loading}>
      <div>"userId: " {data.userId},</div>
      <div>" id: " {data.id},</div>
      <div>" title: " {data.title},</div>
    </Loader>
  );
};
export default TodoData;
