import { Route, Routes } from "react-router-dom";
import Category from "./components/Route/Categories/BossCategoryComponent";
import MensFetching from "./components/Route/Categories/Mens/MensFetching";
import WomenFething from "./components/Route/Categories/Women/WomenFetching";
import NavigationBar from './components/Route/navigation/NavigationBar'
import Shop from './components/shop/ShopComponent'
import PlaceOrderContainer from "./components/Route/placeOrder/placeOrderContainer";
import TotalBill from "./components/Route/placeOrder/TotalBill";
import CartComponentFetching from './components/Route/Cart/CartComponentFetching'
import JewelaryFetching from './components/Route/Categories/jewelary/JewelaryFetching'
import ElectronicsFetching from "./components/Route/Categories/electronics/ElectronicsFetching";
import ShopFetching from "./components/shop/ShopFetching";
import Home from "./components/Route/home/Home";

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<CartComponentFetching/>}/>
      <Route path="/shop" element={<ShopFetching/>}/>
      <Route path="/mens" element={<MensFetching/>}/>
      <Route path="/womens" element={<WomenFething/>}/>
      <Route path="/jewelary" element={<JewelaryFetching/>}/>
      <Route path="/electronics" element={<ElectronicsFetching/>}/>
      <Route path="/order" element={<PlaceOrderContainer/>}/>
      <Route path="/totalBill" element={<TotalBill/>}/>
    </Routes>
    </>
  );
}

export default App;
