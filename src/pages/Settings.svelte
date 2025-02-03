<div class="layout-text settings">
  <h1>Settings</h1>
  <h2>Synchronization</h2>
  <p>
    This is a serverless project. By default, all added words/phrases are saved in the browser storage.<br />
    But you can specify data for accessing <a href="https://gist.github.com/" rel="noreferrer">gist</a> and then the data will be periodically saved to it.
  </p>
  <p>
    Gist is a service from <a href="https://github.com/">github</a> for storing small sets of files with a history of changes.<br />
    It's free. You can read about tokens <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens">here</a>.
  </p>

</div>

<style>
.settings__form-item {
  display: block;
  margin-bottom: 1em;
}

.settings__form-item--buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap);
  margin-top: 2em;
}

.settings__left-buttons {
  margin-right: auto;
}

.settings__right-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--gap);
}

.settings__import-btn {
  position: relative;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
