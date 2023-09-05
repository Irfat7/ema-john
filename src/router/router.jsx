import { createBrowserRouter } from "react-router-dom"
import Shop from "../components/Shop/Shop"
import Home from "../components/Home/Home"
import Orders from "../components/Orders/Orders"
import Inventory from "../components/Inventory/Inventory"
import Login from '../components/Login/Login'
import cartProductsLoader from "../loaders/cartProductsLoader"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Shop/>
            },
            {
                path: '/orders',
                element: <Orders/>,
                loader: cartProductsLoader
            },
            {
                path: '/inventory',
                element: <Inventory/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/*',
        element: <p>NOOOOOOOOOOOOOOOOOO</p>
    }
])

export default router