import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import { Route, Routes } from 'react-router-dom';
import LayoutHome from './Components/LayoutHome';
import LayoutAbout from './Components/LayoutAbout';
import LayoutServices from './Components/LayoutServices';
import LayoutEvents from './Components/LayoutEvents'
import InvestorRegister from './Components/InvestorRegister';
import Complaints from './Components/Complaints';
import Tickets from './Components/Tickets';

// import { useEffect, useState } from 'react';

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
    
      <ScrollToTop />
      <Navbar />
      {/* {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
        
      ) : ( */}
      <Routes>
          <Route path='/' element={<LayoutHome/>  } />
          <Route path='/about' element={<LayoutAbout />}/>
          <Route path='/services' element={<LayoutServices />}/>
          <Route path='/events' element={<LayoutEvents/>} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/Investor_registration' element={<InvestorRegister />} />
          <Route path='/complaints' element={<Complaints />} />
          <Route path='/online_tickets' element={<Tickets />} />
      </Routes>
      {/* // )} */}
      <Footer />
    </div>
  );
}
export default App;