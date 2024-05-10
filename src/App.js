import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage"
import AboutPage from "./components/about/AboutPage";
import AOPPage from "./components/AOP/AOPPage";
import LocationPage from "./components/location/LocationPage";



function App() {
return(
<>
<Router>
<HomePage />
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="/contact" element={<ContactPage />}></Route>
    <Route path="/areasofpractice" element={<AOPPage />}></Route>
    <Route path="/location" element={<LocationPage />}></Route>
    
  </Routes>
</Router>
</>
)
}

export default App;
