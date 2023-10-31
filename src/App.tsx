import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import MySkills from './pages/MySkills'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="myskills" element={<MySkills />} /> */}
      </Routes>
    </div>
  )
}

export default App
