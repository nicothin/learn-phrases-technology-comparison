import React from 'react';

import './Admin.css';

const Admin: React.FC = () => {
  return (
    <div className="admin">
      <div className="admin__sup-table">
        <div className="input-text admin__search">
          <label className="input-text__label"><textarea name="search" rows={1} className="input-text__input" placeholder="Search (3+ characters)"></textarea></label>
        </div>
        <div className="admin__to-right"></div>
      </div>
      <div className="admin__phrase-table">
        <div className="phrases-table">
          <p className="phrases-table__no-phrases">
            There are no phrases here yet.<br />
            It's time <button type="button" className="link">to add a few</button> or
            <label className="import-from-file-button link"><input className="import-from-file-button__input" type="file" accept=".json, application/json" /><span className="import-from-file-button__text">import from file</span></label> or
            <button className="link">import from JSON</button>.
          </p>
        </div>
      </div>
      <div className="admin__sub-table">Phrases counter: 0</div>
      <div className="admin__btn" style={{ right: '2em', bottom: '6em', }}>
        <div className="drop-button drop-button--to-left-top">
          <button className="drop-button__button btn-circle" aria-label="Toggle dropdown" aria-expanded="false" title="Import / Export phrases">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="m4 10-3 3 3 3h1v-2h12v-2H5v-2zM13 2v2H1v2h12v2h1l3-3-3-3Z"></path></svg>
          </button>
        </div>
      </div>
      <button className="admin__btn btn-circle btn-circle--accent" title="Add phrase" style={{ right: '2em', bottom: '2em', }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><use xlinkHref="#plus"></use></svg>
      </button>
    </div>
  );
};

export default Admin;
