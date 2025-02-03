import { Switch, Router, Route, Link } from 'wouter-preact';
import { useHashLocation } from 'wouter-preact/use-hash-location';

import { Learn } from './pages/Learn/Learn';
import { Admin } from './pages/Admin/Admin';
import { About } from './pages/About/About';
import { Settings } from './pages/Settings/Settings';
import { NotFound } from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <Router hook={useHashLocation}>
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
          <Switch>
            <Route path="/" component={Learn} />
            <Route path="/admin" component={Admin} />
            <Route path="/about" component={About} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
