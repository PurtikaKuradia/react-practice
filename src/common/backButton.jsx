import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/todos", { state: "Purtika" });
        }}
      >
        TodosList
      </button>

      <button
        onClick={() => {
          navigate("/posts");
        }}
      >
        PostsList
      </button>
    </>
  );
};
export default BackButton;
