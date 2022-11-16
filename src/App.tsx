import { BrowserRouter } from "react-router-dom";
import { FirstSection } from "./components/FirstSection";
import Header from "./components/Header";
import { Router } from './Router';

function App() {
  return (
    <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  );
}

export default App;
