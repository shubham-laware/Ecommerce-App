import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
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
import AddProduct from "./pages/admin/dashboard/pages/AddProduct"
import UpdateProduct from "./pages/admin/dashboard/pages/UpdateProduct"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <MyState>
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/order" element={
          <UserRoute>
            <Order/>
          </UserRoute>
        }/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={
          <AdminRoute>
            <Dashboard/>
          </AdminRoute>
        }/>
        <Route path="/dashboard/addproduct" element={
          <AdminRoute>
            <AddProduct/>
          </AdminRoute>
        }/>
        <Route path="/dashboard/updateproduct" element={
          <AdminRoute>
            <UpdateProduct/>
          </AdminRoute>
        }/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/*" element={<NoPage/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App


export const UserRoute=({children})=>{

  const user=localStorage.getItem('user');
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}

export const AdminRoute=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'));
  if(admin.user.email==='lawareshubham647@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/> 
  }
}