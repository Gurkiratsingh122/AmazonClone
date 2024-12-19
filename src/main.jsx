import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import { store } from './stores/store.js'
import Checkout from './components/Checkout.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import ProductView from './components/oneComponentUsedAll/ProductView.jsx'
import OrderPlaced from './components/OrderPlaced.jsx'
import YourOrders from './components/yourOrders.jsx'
import AddProduct from './components/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/cart",
            element:<Cart />
        },
        {
            path: "/checkout",
            element:<Checkout />
        },
        {
            path: "/login",
            element:<Login />
        },
        {
            path: "/signup",
            element:<Signup />
        },
        {
            path: "/productDetails",
            element:<ProductDetails />
        },
        {
            path: "/productView",
            element:<ProductView />
        },
        {
            path: "/orderPlaced",
            element:<OrderPlaced />
        },
        {
            path: "/yourOrders",
            element:<YourOrders />
        },
        {
            path: "/AddProduct",
            element:<AddProduct />
        },
      ]}
    ],
  )
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
)
