import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WihsList from './pages/WihsList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import { SingleBlog } from './pages/SingleBlog';
import PrivicyPolicy from './pages/PrivicyPolicy';
import RefoundPolicy from './pages/RefoundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='blogs' element={<Blog/>}/>
            <Route path='blog/:id' element={<SingleBlog/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='product' element={<OurStore/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='product/:id' element={<SingleProduct/>}/>
            <Route path='compare-product' element={<CompareProduct/>}/>
            <Route path='wishlist' element={<WihsList/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
            <Route path='privacy-policy' element={<PrivicyPolicy/>}/>
            <Route path='refound-policy' element={<RefoundPolicy/>}/>
            <Route path='shipping-policy' element={<ShippingPolicy/>}/>
            <Route path='termandconditions' element={<TermAndConditions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
