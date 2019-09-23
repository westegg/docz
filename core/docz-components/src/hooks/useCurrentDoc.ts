import { useContext } from 'react';
import { get } from 'lodash';

import { doczState } from '../state';

export const useCurrentDoc = () => {
  const state = useContext(doczState.context);
  return get(state, 'currentEntry.value');
};
