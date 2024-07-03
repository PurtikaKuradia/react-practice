import ListWithHeader from "../common/ListWithHeader";
import useDataFetch from "../common/useDataFetch";

const PostsList = () => {
  const { data, loading } = useDataFetch("posts");

  return (
    <>
      <ListWithHeader
        title="Posts"
        list={{
          loading: loading,
          data: data,
          columns: [
            { header: "User Id", access: "userId" },
            { header: "Id", access: "id" },
            { header: "Title", access: "title" },
            { header: "Body", access: "body" },
          ],
        }}
        route="posts"
        isPathRouting
      />
    </>
  );
};
export default PostsList;
