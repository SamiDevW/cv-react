
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          {/* always last */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
