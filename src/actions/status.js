import { START_FETCHING, LOADING, FINISHED, IN_PROGRESS } from '../constants/actions';

export const start = () => ({ type: IN_PROGRESS });

export const startFetching = () => ({ type: START_FETCHING });

export const setLoadingStatus = () => ({ type: LOADING });

export const setFinishedStatus = () => ({ type: FINISHED });