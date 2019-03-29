import React from 'react';
import Global from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <div>
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>

    <Global />
  </div>
);

export default App;
