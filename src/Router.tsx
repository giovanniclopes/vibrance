import { Route, Routes } from "react-router-dom";
import { BookClub } from "./pages/BookClub";
import { Home } from './pages/Home';
import Products from "./pages/Products";
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/bookclub" element={<BookClub />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}