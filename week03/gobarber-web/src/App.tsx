import React, { FC } from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'João Azevedo' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
