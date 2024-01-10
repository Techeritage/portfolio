import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <div>
         <Header />
        </div>
        <Routes>
          <Route path="/portfolio/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App


