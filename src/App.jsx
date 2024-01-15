import Header from "./Components/Header";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <div>
         <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App


