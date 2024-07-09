import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/todos", { state: "Purtika" });
        }}
      >
        TodosList
      </button>

      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/posts");
        }}
      >
        PostsList
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/uplifting-state");
        }}
      >
        Uplifting-state
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/form");
        }}
      >
        FormQuiz
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/movingDot");
        }}
      >
        MovingDot
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/contactApp");
        }}
      >
        ContactApp
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/communication");
        }}
      >
        communication
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          navigate("/detailListParent");
        }}
      >
        DetailListParent
      </button>
    </>
  );
};
export default BackButton;
