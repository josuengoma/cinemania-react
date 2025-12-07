import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Admin from './pages/admin/Admin';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>


      <Contact />
      <Footer />
    </div>
  );
}

export default App;
