import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Search from './component/Search/Search'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import All from './pages/SelectItem/All'
import Namangan from './pages/SelectItem/Namangan'
import Fargona from './pages/SelectItem/Fargona'
import Andijon from './pages/SelectItem/Andijon'
import Toshkent from './pages/SelectItem/Toshkent'
import Samarqand from './pages/SelectItem/Samarqand'
import Jizzax from './pages/SelectItem/Jizzax'
import Buxoro from './pages/SelectItem/Buxoro'
import Surxondaryo from './pages/SelectItem/Surxondaryo'
import Qashqadaryo from './pages/SelectItem/Qashqadaryo'
import Xorazm from './pages/SelectItem/Xorazm'
import Sirdaryo from './pages/SelectItem/Sirdaryo'
import Qoraqalpogiston from './pages/SelectItem/Qoraqalpogiston'
// import Slider from './component/Slider/Slider'
import Sliderr from './component/Sliderr/sliderr'
import Main from './pages/main/Main'
import './css/item.css'
import BootstrapSlider from './component/Bootstrap-slider/BootstrapSlider'
// import './css/responsive.css'


function App() {

  return (
    <div className="App">
    <Router>
      <Header/>
      <Search/>
      <Sliderr/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/all' element={<All/>}/>
      <Route path='/namangan' element={<Namangan/>}/>
      <Route path='/fargona' element={<Fargona/>}/>
      <Route path='/andijon' element={<Andijon/>}/>
      <Route path='/toshkent' element={<Toshkent/>}/>
      <Route path='/samarqand' element={<Samarqand/>}/>
      <Route path='/jizzax' element={<Jizzax/>}/>
      <Route path='/buxoro' element={<Buxoro/>}/>
      <Route path='/surxondaryo' element={<Surxondaryo/>}/>
      <Route path='/qashqadaryo' element={<Qashqadaryo/>}/>
      <Route path='/sirdaryo' element={<Sirdaryo/>}/>
      <Route path='/xorazm' element={<Xorazm/>}/>
      <Route path='/qoraqalpogiston' element={<Qoraqalpogiston/>}/>
      <Route path='/' element={<Main/>}/>
      </Routes>
       
      {/* <BootstrapSlider/> */}
      {/* <Footer/> */}
    </Router>
    </div>
  )
}

export default App
