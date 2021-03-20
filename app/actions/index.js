export const playerOne = (data) => {
  return {
    type: "NAME1",
    payload: data,
  };
};

export const playerTwo = (data) => {
  return {
    type: "NAME2",
    payload: data,
  };
};

export const changePlayerTurn = (data) => {
  return {
    type: "TURN_CHANGE",
    payload: data,
  };
};

export const setTick = (data) => {
  return {
    type: "SET_VALUE",
    payload: data,
  };
};

export const myBoard = (data) => {
  return {
    type: "PLAY_BOARD",
    payload: data,
  };
};

export const userMove = (data) => {
  return {
    type: "USER_MOVE",
    payload: data,
  };
};

export const restart = () => {
  return {
    type: "RESTART_GAME",
  };
};

export const player1Count = () => {
  return {
    type: "PLAYER1_COUNT",
    payload: 1,
  };
};

export const player2Count = () => {
  return {
    type: "PLAYER2_COUNT",
    payload: 1,
  };
};

export const player1Point = () => {
  return {
    type: "PLAYER1_POINT",
  };
};

export const player2Point = () => {
  return {
    type: "PLAYER2_POINT",
  };
};

export const player1Lost = () => {
  return {
    type: "PLAYER1_LOST",
  };
};

export const player2Lost = () => {
  return {
    type: "PLAYER2_LOST",
  };
};

export const stepCount = () => {
  return {
    type: "MOVE_COUNT",
    payload: 1,
  };
};

export const refreshCount = () => {
  return {
    type: "REFRESH_COUNT",
  };
};

export const winCountRefresh = () => {
  return {
    type: "REFRESH_WINCOUNT",
  };
};


export const storeData = (data) => {

  return {
    type: "STORE_DATA",
    payload: data
  };
};

