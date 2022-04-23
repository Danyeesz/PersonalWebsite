import './App.css';
import ProjectsPage from './Pages/ProjectsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LoreSkillsPage from './Pages/LoreSkillsPage';
import ContactMe from './Components/ContactMe';

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='projects' element={<div><ProjectsPage /></div>} />
          <Route path='/' element={<div><LoreSkillsPage /></div>} />
          <Route path='About%20Me' element={<div><LoreSkillsPage /></div>} />
        </Routes>
        <ContactMe />
      </BrowserRouter>
     
    </div>)
}

export default App;
