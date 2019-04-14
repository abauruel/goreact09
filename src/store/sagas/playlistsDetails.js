import { put, call } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlayListDetailsActions } from '../ducks/playlistsDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlayListDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel listas os detalhes da playlist '));
  }
}
