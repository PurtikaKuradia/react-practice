import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsList from "./Posts/postsList.jsx";
import TodosList from "./todos/todosList.jsx";
import BackButton from "./common/backButton.jsx";
import ErrorPage from "./common/ErrorPage.jsx";
import PostDetails from "./Posts/post-details.jsx";
import TodoData from "./common/todo-data.jsx";
import Uplifting from "./uplifting-state/upLifting-state.jsx";
import FormSubmit from "./FormState/formsubmit.jsx";
import MovingDot from "./FormState/movingDot.jsx";
import ContactApp from "./FormState/Chat/contactApp.jsx";
import Parent from "./communication/parent.jsx";
import DetailListParent from "./communication/detailListParent.jsx";

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
      path: "/uplifting-state",
      element: <Uplifting />,
    },
    {
      path: "/form",
      element: <FormSubmit />,
    },
    {
      path: "/movingDot",
      element: <MovingDot />,
    },
    {
      path: "/contactApp",
      element: <ContactApp />,
    },
    {
      path: "/communication",
      element: <Parent />,
    },
    {
      path: "/detailListParent",
      element: <DetailListParent />,
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
