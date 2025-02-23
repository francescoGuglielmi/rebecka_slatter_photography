import React, { useEffect, useState } from 'react';
import Homepage from '../homepage/Homepage.jsx'
import AboutPage from '../about/AboutPage.jsx';
import WorkPage from '../work/WorkPage.jsx';
import Navbar from '../navbar/Navbar.jsx';
import Contacts from '../contacts/Contacts.jsx';
import Headshots from '../headshots/Headshots.jsx';
import Pricing from '../pricing/Pricing.jsx';
import HeadshotsAbout from '../headshotsAbout/HeadshotsAbout.jsx';
import DarkContacts from '../darkContacts/DarkContacts.jsx';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from '../footer/Footer.jsx';

const App = () => {

  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const headshotsPathnames = ["/headshots", "/pricing", "/headshot-about", "/headshot-contacts"]

  useEffect(() => {
    if (headshotsPathnames.includes(location.pathname)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setShowMenu(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar theme={theme} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path='/' element={<Homepage navigate={useNavigate()} />} />
        <Route path='/about' element={<AboutPage navigate={useNavigate()} />} />
        <Route path='/work' element={<WorkPage navigate={useNavigate()} />} />
        <Route path='/contact' element={<Contacts navigate={useNavigate()} />} />
        {/* HEADSHOTS PAGE */}
        <Route path='/headshots' element={<Headshots navigate={useNavigate()} showMenu={showMenu} />} />
        <Route path='/pricing' element={<Pricing navigate={useNavigate()} showMenu={showMenu} />} />
        <Route path='/headshot-about' element={<HeadshotsAbout navigate={useNavigate()} showMenu={showMenu} />} />
        <Route path='/headshot-contacts' element={<DarkContacts navigate={useNavigate()} />} />
      </Routes>
      <Footer theme={theme} />
    </>
  );
}

export default App;
