import { put, call } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlayListActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlayListActions.getPlaylistSuccess(response.data));
  } catch (err) {
    console.err(err);
  }
}
