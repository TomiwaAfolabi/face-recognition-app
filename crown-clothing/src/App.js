import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import UserAuth from "./routes/user-auth/user-auth.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<UserAuth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
