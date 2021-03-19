let initialStat={
    board:["","","","","","","","",""],
    turn:'',
    Patterns :[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],

      count:0,
      finalResult:''
}


const boardReducer = (state = initialStat, action) => {
    switch(action.type){
        case 'SET_VALUE':
            const newArray = [...state.board];
            newArray[action.payload.data] = action.payload.player;
            return{
                ...state,
                board: newArray
            }
        case 'PLAY_BOARD':
            return{
                ...state,
                board:action.payload
            } 
        case 'USER_MOVE':{
            let turn = state.turn
            const board = state.board.map((val, i) => {
            turn = state.turn === 'O' || state.turn === '' ? 'X' : 'O'
            if (i === action.payload) val = turn
            return val
            })
            return {...state, board, turn}
            }  

        case 'RESTART_GAME':
            return{
                ...state,
                board:["","","","","","","","",""]
            }

        case 'MOVE_COUNT':
            return{
                ...state,
                count: state.count + action.payload
            }

            case 'REFRESH_COUNT':
            return{
                ...state,
                count: 0
            }
        default:
            return state;
    }

}

export default boardReducer;