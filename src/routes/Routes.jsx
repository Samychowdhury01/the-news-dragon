import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/category/:id",
        element: <Category/>,
        loader : ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout/>,
    children:[
      {
        path: ':id',
        element: <News/>
      }
    ]
  }
]);

export default router;
