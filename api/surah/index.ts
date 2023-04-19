import axios from 'axios';

import type { ISurah } from '@/types/surah';

const BASE_URL = 'https://api.npoint.io/99c279bb173a6e28359c/data';

export const getSurahAll = async () => {
  return axios.get<ISurah[]>(BASE_URL);
};
