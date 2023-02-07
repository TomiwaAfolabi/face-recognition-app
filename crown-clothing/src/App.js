import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import UserAuth from "./routes/user-auth/user-auth.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<UserAuth />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
