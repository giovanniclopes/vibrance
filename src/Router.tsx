import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookClub from "./pages/BookClub";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/bookclub" element={<BookClub />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
