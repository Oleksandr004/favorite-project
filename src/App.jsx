import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutTheClubPage } from "../src/Pages/AboutTheClubPage";
import NewsPages from "./Pages/NewsPages";
import FaqPage from "./Pages/FaqPage";
import RulesPage from "./Pages/RulesPage";
import ContactPage from "./Pages/ContactPage";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutTheClubPage />} />
          <Route path="/news"  element={ <NewsPages/>} />
          <Route path="/faq"  element={ <FaqPage/>} />
          <Route path="/rules"  element={ <RulesPage/>} />
          <Route path="/contact"  element={ <ContactPage/>} />
          <Route path="/login"  element={ <LoginPage/>} />
          <Route path="/signup"  element={ <SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
