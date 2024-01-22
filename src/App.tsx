import GlobalStyle from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLoader } from "./redux/dataLoader";
import Dashboard from "./components/Dashboard";
import Login from "./ui/Landing/Login";
import Landing from "./components/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    loader: AppLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // {
      //   path: "movies",
      //   element: <Movies />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}


export default App
