import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Home/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home/>
        }
    ]
)



export default router;