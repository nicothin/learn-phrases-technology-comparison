import './Settings.css';

export const Settings = () => {
  return (
    <div className="layout-text  settings">
      <h1>Settings</h1>
      <h2>Synchronization</h2>
      <p>
        This is a serverless project. By default, all added words/phrases are saved in the browser storage.<br />
        But you can specify data for accessing <a href="https://gist.github.com/" rel="noreferrer">gist</a> and then the data will be periodically saved to it.
      </p>
      <p>
        Gist is a service from <a href="https://github.com/">github</a> for storing small sets of files with a history of changes.<br />
        It&apos;s free. You can read about tokens <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens">here</a>.
      </p>
    </div>
  );
};
