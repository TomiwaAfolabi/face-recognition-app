import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import UserAuth from "./routes/user-auth/user-auth.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-page.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<UserAuth />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
