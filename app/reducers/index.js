import { combineReducers } from 'redux';
import playerReducer from './players';
import boardReducer from './board';


const allReducers = combineReducers({
    players: playerReducer,
    board:boardReducer
    
  });
  
  export default allReducers;