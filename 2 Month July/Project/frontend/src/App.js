import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Birthday from './pages/auth/Birthday'
import Home from './pages/Home'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ='/' element={<Login/>}/>
     <Route path ='/register' element={<Register/>}/>
      <Route path ='/birthday' element={<Birthday/>}/>
      <Route path ='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
