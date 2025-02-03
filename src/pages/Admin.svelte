<div class="admin">
  <div class="admin__sup-table">
    <div class="input-text admin__search">
      <label class="input-text__label"><textarea name="search" rows="1" class="input-text__input" placeholder="Search (3+ characters)" style="height: 36px;"></textarea></label>
    </div>
    <div class="admin__to-right"></div>
  </div>
  <div class="admin__phrase-table">
    <div class="phrases-table">
      <p class="phrases-table__no-phrases">
        There are no phrases here yet.<br />
        It's time <button type="button" class="link">to add a few</button> or
        <label class="import-from-file-button link"><input class="import-from-file-button__input" type="file" accept=".json, application/json" /><span class="import-from-file-button__text">import from file</span></label> or
        <button class="link">import from JSON</button>.
      </p>
    </div>
  </div>
  <div class="admin__sub-table">Phrases counter: 0</div>
  <div class="admin__btn" style="right: 2em; bottom: 6em;">
    <div class="drop-button drop-button--to-left-top">
      <button class="drop-button__button btn-circle" aria-label="Toggle dropdown" aria-expanded="false" title="Import / Export phrases">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="m4 10-3 3 3 3h1v-2h12v-2H5v-2zM13 2v2H1v2h12v2h1l3-3-3-3Z"></path></svg>
      </button>
    </div>
  </div>
  <button class="admin__btn btn-circle btn-circle--accent" title="Add phrase" style="right: 2em; bottom: 2em;">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><use xlink:href="#plus"></use></svg>
  </button>
</div>

<style>
.admin {
  display: flex;
  gap: var(--gap);
  flex-direction: column;
  height: 100%;
  padding: var(--gap);
}

.admin__sup-table {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  flex-shrink: 0;
}

.admin__phrase-table {
  flex-grow: 1;
  flex-shrink: 1;
  height: 1em;
}

.admin__sub-table {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  flex-shrink: 0;
}

.admin__to-right {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: auto;
}

.admin__search {
  width: 180px;
}

.admin__btn {
  position: fixed;
  z-index: 1000;
}
</style>
