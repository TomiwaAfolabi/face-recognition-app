import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangeListener,
  createUserDocument,
  getCategoriesandDocuments,
} from "./utils/firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import UserAuth from "./routes/user-auth/user-auth.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-page.component";
import { setCurrentUser } from "./store/user/user-action";
import { setcategories } from "./store/categories/categories-action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangeListener(async (user) => {
      if (user) {
        await createUserDocument(user);
      }

      dispatch(setCurrentUser(user));
    });
  }, [dispatch]);

  useEffect(() => {
    const getcategoryMapData = async () => {
      const categoryMap = await getCategoriesandDocuments();

      dispatch(setcategories(categoryMap));
    };
    getcategoryMapData();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<UserAuth />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
