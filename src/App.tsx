import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/auth/login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
     
        <Route path="/auth" element={<LoginForm />} />
 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
