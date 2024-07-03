import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsList from "./Posts/postsList.jsx";
import TodosList from "./todos/todosList.jsx";
import BackButton from "./common/backButton.jsx";
import ErrorPage from "./common/ErrorPage.jsx";
import PostDetails from "./Posts/post-details.jsx";
import TodoData from "./common/todo-data.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BackButton />,
    },
    {
      path: "/posts",
      element: <PostsList />,
    },
    {
      path: "/posts/:id",
      element: <PostDetails />,
    },
    {
      path: "/todos",
      element: <TodosList />,
    },
    {
      path: "/todo-data",
      element: <TodoData />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
