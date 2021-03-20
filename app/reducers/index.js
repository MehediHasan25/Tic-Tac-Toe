import { combineReducers } from 'redux';
import playerReducer from './players';
import boardReducer from './board';
import showReducer from './show';


const allReducers = combineReducers({
    players: playerReducer,
    board:boardReducer,
    show:showReducer
    
  });
  
  export default allReducers;