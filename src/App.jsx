import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Mycode from './Components/Mycodes/Mycode'
import Sidenav from './Components/Sidenav/Sidenav'
import Introduce from './Components/Introduce/Introduce'
import Educate from './Components/Educate/Educate'

function App() {
  return (
    <>
    <Router>
    <Sidenav/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sidenav" element={<Sidenav/>}></Route>
          <Route path="/mycode" element={<Mycode/>}></Route>
          <Route path="/introduce" element={<Introduce/>}></Route>
          <Route path="/education" element={<Educate/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
