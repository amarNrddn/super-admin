import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Layout/sideBar';
import Login from './pages/login';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/*' element={<SideBar />} />
    </Routes>
  )
}

export default App;
