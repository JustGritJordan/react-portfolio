import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from './data/data.json'
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import About from './pages/about';
function App() {
  return ( 
    <BrowserRouter>
    <Navigation/>
    <Routes>
                  <Route path="about" element={<About title={data.pages.about} bio={data.bio} />} />
                  <Route path="projects" element={<Portfolio title={data.pages.portfolio} projects={data.portfolio} />} />
                  <Route path="contact" element={<Contact data={data.contact} title={data.pages.contact} />} />
                   <Route path="resume" element={<Resume data={data.resume} title={data.pages.resume} />} />
                  <Route path="/" element={<About />}/>
              </Routes>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
