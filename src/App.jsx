import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Sign/Sign-upPage.jsx"
import SignIn from "./Pages/Sign/Sign-inPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
