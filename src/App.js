//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Dependieces
import { Route, Routes } from 'react-router-dom';
//Components
import { Navbar, Footer } from './components';
//Pages
import { About, Contact, Error, Home, Services } from './components/pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
