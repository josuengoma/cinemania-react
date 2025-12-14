import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Single from './pages/single/Single';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import All from './pages/edits/All';
import { FilmProvider } from './contexts/FilmContext';


function App() {
  return (
    <div className="App">
      <Header />

      <FilmProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard/editAll' element={<All />}></Route>
          <Route path='/single/:id' element={<Single />}></Route>
        </Routes>
      </FilmProvider>




      <Contact />
      <Footer />
    </div>
  );
}

export default App;
