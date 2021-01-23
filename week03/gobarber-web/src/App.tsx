import React, { FC } from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: FC = () => (
  <>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
