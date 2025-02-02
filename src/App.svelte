<script lang="ts">
  import Router, { link } from 'svelte-spa-router';
  import packageJson from '../package.json';
  import Learn from './pages/Learn.svelte';
  import Admin from './pages/Admin.svelte';
  import About from './pages/About.svelte';
  import Settings from './pages/Settings.svelte';
  import NotFound from './pages/NotFound.svelte';

  const routes = {
    '/': Learn,
    '/admin': Admin,
    '/about': About,
    '/settings': Settings,
    '*': NotFound,
  };
</script>


<div class="app">
  <div class="app__header">
    <nav>
      <ul>
        <li><a href="/" use:link>Learn</a></li>
        <li><a href="/admin" use:link>Admin</a></li>
        <li><a href="/about" use:link>About</a></li>
        <li><a href="/settings" use:link>Settings</a></li>
      </ul>
    </nav>
  </div>

  <div class="app__content">
    <Router {routes} />
  </div>
</div>

<div className="version">{packageJson.version}</div>
