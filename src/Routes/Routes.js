import { createBrowserRouter } from "react-router-dom";
import CategoriesItemDetails from "../Components/HomeComponents/CategoriesItemDetails/CategoriesItemDetails";
// import Specificcategorie from "../Components/Specificcategorie/Specificcategorie";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
 

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
                element: <CategoriesItemDetails></CategoriesItemDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/productCategories/${params.id}`)
            },
            // {
            //     path:'/specificDetails',
            //     element:<Specificcategorie></Specificcategorie>
            //     // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            // },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])