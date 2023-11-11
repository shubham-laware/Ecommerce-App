import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import NoPage from "./pages/nopage/NoPage"
import MyState from "./context/data/MyState"
import AllProducts from "./pages/allproducts/AllProducts"
import Login from "./pages/registeration/Login.Jsx"
import SignUp from "./pages/registeration/SignUp"
import ProductInfo from "./pages/productinfo/ProductInfo"


function App() {

  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/*" element={<NoPage/>}/>
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
