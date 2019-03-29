import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import Routes from './routes';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>

    <Global />
  </BrowserRouter>
);

export default App;
