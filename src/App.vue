<script setup lang="ts">
import packageJson from '../package.json';
</script>

<template>
  <div class="app">
    <div class="app__header">
      <nav>
        <ul>
          <li><RouterLink to="/">Learn</RouterLink></li>
          <li><RouterLink to="/admin">Admin</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/settings">Settings</RouterLink></li>
        </ul>
      </nav>
    </div>

    <div class="app__content">
      <RouterView />
    </div>
  </div>

  <div class="version">{{ packageJson.version }}</div>
</template>
