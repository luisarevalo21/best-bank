import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import Savings from "./pages/Savings";
import Financing from "./pages/Financing";
import Stocks from "./pages/Stocks";
import MainLayout from "./components/MainLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="payments" element={<Payments />}></Route>
        <Route path="savings" element={<Savings />}></Route>
        <Route path="financing" element={<Financing />}></Route>
        <Route path="stocks" element={<Stocks />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
