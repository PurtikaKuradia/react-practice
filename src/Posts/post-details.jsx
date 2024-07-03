import { useParams } from "react-router-dom";
import useDataFetch from "../common/useDataFetch";
import Loader from "../common/Loader";

const PostDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useDataFetch(`posts/${id}`);
  console.log("Post details", data, error);
  return (
    <Loader loading={loading}>
      <div>"userId: " {data.userId},</div>
      <div>" id: " {data.id},</div>
      <div>" title: " {data.title},</div>
      <div>" body: " {data.body}</div>
    </Loader>
  );
};
export default PostDetails;
