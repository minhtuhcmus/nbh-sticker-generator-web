import React, { useState } from 'react';
import './App.css';
import ListApp from "./components/list";
import AppName from './components/name';
import AppSingle from './components/single';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className='App'>
      <div className='buttons'>
        <div
          className={`${tabIndex === 0 ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => {
            if (tabIndex !== 0) {
              setTabIndex(0);
            }
          }}>
          List
        </div>
        <div
          className={`${tabIndex === 1 ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => {
            if (tabIndex !== 1) {
              setTabIndex(1);
            }
          }}>
          Single
        </div>
        <div
          className={`${tabIndex === 2 ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => {
            if (tabIndex !== 2) {
              setTabIndex(2);
            }
          }}>
          Name
        </div>
      </div>
      <div className={`${tabIndex === 0 ? '' : 'hidden'}`}>
        <ListApp />
      </div>
      <div className={`${tabIndex === 1 ? '' : 'hidden'}`}>
        <AppSingle />
      </div>
      <div className={`${tabIndex === 2 ? '' : 'hidden'}`}>
        <AppName />
      </div>
    </div>
  );
}

export default App;
