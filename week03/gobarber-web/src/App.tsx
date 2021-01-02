import React, { FC } from 'react';
import Signin from './pages/Signin';

import GlobalStyle from './styles/global';

const App: FC = () => (
  <>
    <Signin />

    <GlobalStyle />
  </>
);

export default App;
