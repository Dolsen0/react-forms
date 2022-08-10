import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./App.css";
import {Home} from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Contact from "./pages/contacts";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='about' element={<About />} />
      <Route path='contact' element ={<Contact />} />
      <Route path='*' element ={<h4>Page not found</h4>} />
    </Routes>
    {/* <Home />
    <Header />
    <About />
    <Contact />
    <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App;