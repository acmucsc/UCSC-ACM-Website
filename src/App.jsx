import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Events from './pages/Events/Events'
import './index.css';
import MeetTheTeam from './pages/meet-the-team/MeetTheTeam';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<MeetTheTeam />} />
      </Routes>
    </Router>
  );
};

export default App;
