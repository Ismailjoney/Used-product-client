import { createBrowserRouter } from "react-router-dom";
import CategoriesItemDetails from "../Components/HomeComponents/CategoriesItemDetails/CategoriesItemDetails";
import Dashboard from "../DashBoard/Dashboard";
import AddOrder from "../DashboardLayout/AddOrder/AddOrder";
import AddYourProduct from "../DashboardLayout/AddYourProduct/AddYourProduct";
import DashBoardLayout from "../DashboardLayout/DashBoardLayout";
import Myorder from "../DashboardLayout/Myorder/Myorder";
import ErrorPage from "../ErrorPage/ErrorPage";
// import Specificcategorie from "../Components/Specificcategorie/Specificcategorie";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogRegInfo/LogIn";
import SingUp from "../Pages/LogRegInfo/SingUp";
import PrivetRoutes from "../PriverRoutes/PrivetRoutes";
 

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/categories/:id',
                element: <PrivetRoutes><CategoriesItemDetails></CategoriesItemDetails></PrivetRoutes>,
                loader: ({params}) => fetch(`https://used-products-server-omega.vercel.app/productCategories/${params.id}`)
            },

            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/signup',
                element: <SingUp></SingUp>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        ],
        
    },
   {
    path: '/dashboard',
    element: <PrivetRoutes><DashBoardLayout></DashBoardLayout></PrivetRoutes>,
    children: [
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/dashboard/myorder',
            element:<Myorder></Myorder>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddYourProduct></AddYourProduct>
        },
        {
            path:'*',
            element:<ErrorPage></ErrorPage>
        }
    ]
   },
  
])