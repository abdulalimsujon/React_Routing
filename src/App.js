
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Contract from './pages/Contract';
import Home from './pages/Home';
import Navbar from './pages/Nav/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/:title' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
