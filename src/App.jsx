import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsList from "./Posts/postsList.jsx";
import TodosList from "./todos/todosList.jsx";
import BackButton from "./common/backButton.jsx";
import ErrorPage from "./common/ErrorPage.jsx";
import PostDetails from "./Posts/post-details.jsx";
import TodoData from "./common/todo-data.jsx";
import CounterContextApp from "./Counter/counterContextApp.jsx";
import FormApp from "./FormColor/formApp.jsx";
import Home from "./Bank/home.jsx";
import Login from "./Bank/login.jsx";
import SignUp from "./Bank/signUp.jsx";
import Deposit from "./Bank/deposit.jsx";
import Debit from "./Bank/debit.jsx";
import Statement from "./Bank/statement.jsx";
import Services from "./Bank/services.jsx";
import ContactHeader from "./Contact Manager/contactHeader.jsx";

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
      path: "/counter",
      element: <CounterContextApp />,
    },
    {
      path: "/form",
      element: <FormApp />,
    },
    {
      path: "/bank",
      element: <Home />,
      children: [
        {
          path: "account",
          element: <Services />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "deposit",
          element: <Deposit />,
        },
        {
          path: "withdraw",
          element: <Debit />,
        },
        {
          path: "statement",
          element: <Statement />,
        },
        {
          path: "header",
          element: <ContactHeader />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
