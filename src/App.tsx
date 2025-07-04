import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/pages";
import LoginForm from "./components/auth/login";
import RegisterForm from "./components/auth/register";
import AdminPage from "./components/pages/admin/admin";
import About from "./components/pages/about";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
