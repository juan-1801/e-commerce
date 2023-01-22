import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartMenu from "./pages/global/cartMenu";
import Navbar from "./pages/global/NavBar";
import Home from "./pages/home";
/* import Confirmation from "./pages/cheackout/confirmation"; */
/* import Checkout from "./pages/cheackout/checkout"; */
/* import ItemDetails from "./pages/ItemDetails/ItemDetails"; */
/* import Navbar from "./pages/global/Navbar"; */
/* import Footer from "./pages/global/Footer"; */
/* import ItemDetails from "./pages/itemDetails/ItemDetails"; */
/* import CartMenu from "./pages/global/CartMenu"; */
/* import Checkout from "./pages/checkout/Checkout"; */
/* import Confirmation from "./pages/checkout/Confirmation"; */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="item/:itemId" element={<ItemDetails/>} /> */}
        {/* <Route path="checkout" element={<Checkout/>} /> */}
        {/* <Route path="checkout/success" element={<Confirmation/>} /> */}
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
