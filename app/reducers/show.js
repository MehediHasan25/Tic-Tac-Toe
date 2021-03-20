let initialState = {
  data: [],
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        data: [...state.data, [].concat(...action.payload)],
      };
    default:
      return state;
  }
};

export default showReducer;
