import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Library from './pages/library/Library'
import Forum from './pages/forum/Forum'
import Play from './pages/play/Play'
import MySheets from './pages/mySheets/MySheets'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

/*const [loginDisplay, setLoginDisplay] = useState('login');

const toggleLogState = (pageName) => {
  setLoginDisplay(pageName);
}*/

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='library' element={<Library/>}/>
        <Route path='forum' element={<Forum/>}/>
        <Route path='play' element={<Play/>}/>
        <Route path='mySheets' element={<MySheets/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App