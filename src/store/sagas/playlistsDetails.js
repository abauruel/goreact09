import { put, call } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlayListDetailsActions } from '../ducks/playlistsDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlayListDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.err(err);
  }
}
