import Navbar from "./Components/Navbar/Navbar.jsx";
import SalesAlert from "./Components/SalesAlert/SalesAlert";
import Footer from "./Components/Footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactpage from "./Pages/Contact/Contactpage.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Aboutpage from "./Pages/About/Aboutpage.jsx";
import Homapage from "./Pages/Homepage/Homapage.jsx";
import Cartpage from "./Pages/Cartpage/Cartpage.jsx";
import Accountpage from "./Pages/Accountpage/Accountpage.jsx";
import Productdetails from "./Pages/Productdetails/Productdetails.jsx";

const App = () => {
  return (
    <div>
      <SalesAlert />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/accountpage" element={<Accountpage />} />
        <Route path="/productdetails" element={<Productdetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
