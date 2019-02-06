import { START_FETCHING, LOADING, FINISHED, IN_PROGRESS } from '../constants/actions';

export default (state = 'initial', action) => {
  switch(action.type) {
    case IN_PROGRESS:
      return 'in_progress';
    case START_FETCHING:
      return 'fetching';
    case LOADING:
      return 'loading';
    case FINISHED:
      return 'finished';
    default: 
      return state;
  }
}