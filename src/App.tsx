import { HashRouter as Router, Routes, Route, Link } from "react-router";
import packageJson from '../package.json';

import Learn from './pages/Learn/Learn';
import Admin from './pages/Admin/Admin';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__header">
        <nav>
          <ul>
            <li><Link to="/">Learn</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        </div>

        <div className="app__content">

          <Routes>
            <Route path="/" element={<Learn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>

      <div className="version">{packageJson.version}</div>
    </Router>
  )
}

export default App
