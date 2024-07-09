import { useNavigate } from "react-router-dom";
import Header from "./header";
import List from "./List";

const ListWithHeader = ({
  title,
  list: { columns, data, loading, getClickedItem },
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      <Header as="h2" title={title} />
      <List
        loading={loading}
        data={data}
        columns={columns}
        getClickedItem={getClickedItem}
      />
    </div>
  );
};
export default ListWithHeader;
