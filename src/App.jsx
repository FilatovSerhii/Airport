import React from 'react';
import { Provider } from 'react-redux';

import Main from './flights/components/main/Main.jsx';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default App;
