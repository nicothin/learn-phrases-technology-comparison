<div class="learn">

  <p class="learn__empty">
    <span>There are no phrases here yet. Go to <router-link to="/admin">the admin section</router-link> and add a few.</span>
  </p>

</div>

<style>
.learn {
  height: 100%;
}

.learn__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  font-size: var(--text-size-xl);
  text-align: center;
  padding: 1em;
}

.learn__carousel {
  height: 100%;
}

.learn__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5em;
}

.learn__btn {
  position: fixed !important;
  z-index: 1000;
}

.learn__common-progress {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;

  .progress__text {
    top: 0.6rem;
    left: auto;
    right: 0.5rem;
    text-align: right;
  }
}

.learn__unlearned-progress {
  position: fixed !important;
  top: 0.3rem;
  left: 0;
  right: 0;
}

.learn__common-progress-info {
  margin: 0;
}

</style>
