import React from 'react';
import Slider from 'rc-slider';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import PropTypes from 'prop-types';
import {
  Container, Current, Volume, Controls, Progress, ProgressStyle, Time,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
    <Current>
      <img
        src="http://designontherocks.blog.br/wp-content/uploads/2010/07/typoster2.jpg"
        alt="cover"
      />

      <div>
        <span>Dark side of the moon</span>
        <small>Pink Floyd</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shurffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:30</span>
        <ProgressStyle>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressStyle>
        <span>5:00</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);
Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
