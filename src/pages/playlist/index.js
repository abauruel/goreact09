import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PlayListsDetailsActions } from '../../store/ducks/playlistsDetails';

import Loading from '../../components/Loading';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => (
    <Container>
      <Header>
        <img
          src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
          alt="cover"
        />

        <div>
          <span>PLAYLIST</span>
          <h1>Rock forever</h1>
          <p>13 musicas</p>

          <button>PLAY</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Pappercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );

  render() {
    return this.props.playlistsDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistsDetails: state.playlistsDetails,
});
const mapDispatchToProps = dispatch => bindActionCreators(PlayListsDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
