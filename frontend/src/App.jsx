import './App.css'
import ChooseGentsSeason from './pages/firran-collections/ChooseGentsSeason';
import ChooseLadiesSeason from './pages/firran-collections/ChooseLadiesSeason';
import Gents from './pages/firran-collections/Gents';
import Ladies from './pages/firran-collections/Ladies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/collections-ladies" element={<ChooseLadiesSeason />} />
        <Route path="/collections-gents" element={<ChooseGentsSeason />} />
        <Route path='/ladies' element={<Ladies/>}/>
        <Route path='/gents' element={<Gents/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App