let initialState={
    data:[]
}


const showReducer = (state = initialState, action) => {
    
    switch(action.type){
        
        case 'STORE_DATA':
            return {
                ...state,
                data:[...state.data, action.payload1, action.payload2]
              };
        default:
            return state;
    }


}

export default showReducer;