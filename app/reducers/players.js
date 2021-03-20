let initialState = {
  player1: "",
  player2: "",
  player1Select: "X",
  player2Select: "O",
  turnPlayer: "X",
  player1Point: 0,
  player2Point: 0,
  playersName: [],
  playersPoint: [],
  winCount1: 0,
  winCount2: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME1":
      return {
        ...state,
        player1: action.payload,
        playersName: [...state.playersName, action.payload],
      };

    case "NAME2":
      return {
        ...state,
        player2: action.payload,
        playersName: [...state.playersName, action.payload],
      };

    case "TURN_CHANGE":
      return {
        ...state,
        turnPlayer: action.payload,
      };

    case "PLAYER1_COUNT":
      return {
        ...state,
        winCount1: state.winCount1 + action.payload,
      };

    case "PLAYER2_COUNT":
      return {
        ...state,
        winCount2: state.winCount2 + action.payload,
      };

    case "PLAYER1_POINT":
      return {
        ...state,
        player1Point: state.player1Point + 2,
      };

    case "PLAYER2_POINT":
      return {
        ...state,
        player2Point: state.player2Point + 2,
      };

    case "REFRESH_WINCOUNT":
      return {
        ...state,
        winCount1: 0,
        winCount2: 0,
      };

    case "PLAYER1_LOST":
      return {
        ...state,
        player1Point: state.player1Point + 1,
      };

    case "PLAYER2_LOST":
      return {
        ...state,
        player2Point: state.player2Point + 1,
      };

    case "REFRESH_POINT":
      return{
        ...state,
        player1Point:0,
        player2Point:0
      }

    default:
      return state;
  }
};

export default playerReducer;
