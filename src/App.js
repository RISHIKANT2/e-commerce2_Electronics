import './App.css';
import { MobileData } from './MobileData';
import CategoryItem from './components/categoryItem';
import Hero from './components/hero';
import Navbar from './components/navbar';
import gadgets1 from '../src/images/laptopSale.jpg';
import gadgets2 from '../src/images/mobsale.jpg';
import gadgets3 from '../src/images/homeItems.jpg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LAptopData } from './laptopData';
import Signup from './components/signup';
import Login from './components/login';
import { HomeAplliance } from './components/homeaplliance';
import electronic from './images/electronics.jpg';
import HomeItemBackground from './images/HomeItemBackground2.jpg'
import CategoryData from './components/categoryData';
import Cart from './components/Cart';
import Product from './components/product';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    
     <Routes>
     <Route path="/" element={
         <><Hero img={gadgets2}  bgImg={electronic}/>
         <CategoryItem productData={MobileData} name="Mobiles" />
         <CategoryItem productData={LAptopData} name="Laptops" />
         <CategoryItem  productData={HomeAplliance} name="HomeAppliance"/></>}
      ></Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/mobileData/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/computer/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/homeAppliance/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path="/mobileData" element={
         <><Hero img={gadgets2}  bgImg={electronic}/>
         <CategoryItem productData={MobileData} name="Mobiles" /></>}
      ></Route>
      <Route path="/computer" element={<>
        <Hero img={gadgets1} bgImg={electronic}/>
        <CategoryItem productData={LAptopData} name="Laptops" /></>}></Route>
      <Route path="/homeAppliance" element={<>
        <Hero img={gadgets3} bgImg={HomeItemBackground}/>
        <CategoryItem  productData={HomeAplliance} name="HomeAppliance"/></>
      }></Route>
      <Route path="/Mobilesdata" element={
         <><CategoryData productData={MobileData}  /></>}></Route>

         <Route path="/Laptopsdata" element={
         <><CategoryData productData={LAptopData}  /></>}></Route>

         <Route path="/HomeAppliancedata" element={
         <><CategoryData productData={HomeAplliance}  /></>}></Route>

      <Route path="/cart-item" element={<Cart />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
     </Routes>
    </Router>
     
    </>
    
  );
}

export default App;
