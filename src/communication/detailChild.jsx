import useDataFetch from "../common/useDataFetch";
import Loader from "../common/Loader";

const DetailChild = ({ id }) => {
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
export default DetailChild;
