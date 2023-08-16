import { Routes, Route } from 'react-router-dom'

import UpButton from './components/upButton/upButton'
import Home from './pages/home/home'
import Cv from './pages/cv/cv'
import NoRepley from './pages/noRepley/noRepley'

function App() {
    return (
    <>  
      <UpButton/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cv' element={<Cv/>}/>
        <Route path='*' element={<NoRepley/>}/>
      </Routes>
    </>
  );
}

export default App;
