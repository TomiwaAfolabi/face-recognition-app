import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
