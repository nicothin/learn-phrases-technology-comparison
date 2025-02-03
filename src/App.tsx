import { HashRouter, Route } from '@solidjs/router';

import Learn from './pages/Learn/Learn';
import Admin from './pages/Admin/Admin';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';
import packageJson from '../package.json';

function App() {
  return (

    <div class="app">
      <div class="app__header">
        <nav>
          <ul>
            <li><a href="/#/">Learn</a></li>
            <li><a href="/#/admin">Admin</a></li>
            <li><a href="/#/about">About</a></li>
            <li><a href="/#/settings">Settings</a></li>
          </ul>
        </nav>
      </div>

      <div class="app__content">
        <HashRouter>
          <Route path="/" component={Learn} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
          <Route path="*" component={NotFound} />
        </HashRouter>
      </div>

      <div class="version">{packageJson.version}</div>
    </div>
  )
}

export default App
