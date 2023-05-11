import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Base from './pages/base/Base'
import Full from './pages/full/Full'
import NavBar from "components/NavBar"
import NavBarSmall from "components/NavBar"
import Home1 from './pages/home/Home1'
import Library from './pages/library/Library'
import Forum from './pages/forum/Forum'
import Play from './pages/play/Play'
import MySheets from './pages/mySheets/MySheets'
import NotFound from './pages/notFound/NotFound'
import Account from './pages/account/Account'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<Home1/>}/>
          <Route path='library' element={<Library/>}/>
          <Route path='forum' element={<Forum/>}/>
          <Route path='play' element={<Play/>}/>
          <Route path='mySheets' element={<MySheets/>}/>
          <Route path='account' element={<Account/>}/>

          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>

          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
Progress on Login Page Differences:

<BrowserRouter>
      <Routes>

        <Route element={<Base/>}>
          <Route path="/" element={<Navigate to="/" replace />}/>

          <Route index element={<Home1/>}/>
          <Route path='login' element={<Login/>}/>

          <Route path='register' element={<Register/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route element={<Full/>}>
          <Route path="/" element={<Navigate to="/" replace />}/>

          <Route index element={<Home1/>}/>
          <Route path='library' element={<Library/>}/>
          <Route path='forum' element={<Forum/>}/>
          <Route path='play' element={<Play/>}/>
          <Route path='mySheets' element={<MySheets/>}/>
          <Route path='account' element={<Account/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
*/