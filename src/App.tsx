import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/auth/login";
import Hero from "./components/pages/hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
           <Route path="/" element={<Hero/>}/>
           <Route path="/auth" element={<LoginForm />} />
 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
