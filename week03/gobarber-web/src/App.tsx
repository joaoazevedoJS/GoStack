import React, { FC } from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: FC = () => (
  <>
    <SignIn />

    <GlobalStyle />
  </>
);

export default App;
