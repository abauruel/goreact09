import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="Playlist"
        />
        <strong>rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="Playlist"
        />
        <strong>rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="Playlist"
        />
        <strong>rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="Playlist"
        />
        <strong>rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
