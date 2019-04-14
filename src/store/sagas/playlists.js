import { put, call } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlayListActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlayListActions.getPlaylistSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter as playlists'));
  }
}
