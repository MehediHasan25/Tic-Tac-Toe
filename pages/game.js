import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Game.module.css";
import { useSelector, useDispatch } from "react-redux";
import Square from "../app/components/Square";
import {
  userMove,
  restart,
  player1Count,
  player2Count,
  player1Point,
  player2Point,
  stepCount,
  refreshCount,
  winCountRefresh,
  player1Lost,
  player2Lost,
  storeData,
  refreshPlayerPoint,
} from "../app/actions";

const game = () => {
  const board = useSelector((state) => state.board);
  const player = useSelector((state) => state.players);
  const { winCount1 } = useSelector((state) => state.players);
  const { winCount2 } = useSelector((state) => state.players);
  const router = useRouter();
  const [list1, setList1] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    WinnerCheck();
  }, [board.board]);

  const chooseSquare = (square) => {
    if (!board[square]) {
      dispatch(userMove(square));
      dispatch(stepCount());
    }

    if (board.count >= 8) {
      alert("Game Tied");
      dispatch(refreshCount());
      dispatch(restart());
    }
  };

  const WinnerCheck = () => {
    board.Patterns.forEach((currPattern) => {
      const firstPlayer = board.board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board.board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        if (board.turn === player.player1Select) {
          dispatch(player1Count());
          dispatch(player2Lost());
          dispatch(refreshCount());
          dispatch(player1Point());
          alert(`${player.player1} wins the round`);
        } else {
          dispatch(player2Count());
          dispatch(player1Lost());
          dispatch(refreshCount());
          dispatch(player2Point());
          alert(`${player.player2} wins the round`);
        }

        dispatch(restart());

        if (winCount1 + winCount2 === 3) {
          alert("Last round then Check Final Result");
        }

        if (winCount1 + winCount2 === 4) {
          let data1 = {
            name: `${player.player1}`,
            point: `${player.player1Point}`,
          };
          let data2 = {
            name: `${player.player2}`,
            point: `${player.player2Point}`,
          };

          setList1(list1.push(data1));
          setList1(list1.push(data2));
          dispatch(storeData(list1));
          dispatch(winCountRefresh());
        }
      }
    });
  };

  const onPlayAgain = (e) => {
    e.preventDefault();
    dispatch(refreshPlayerPoint());
    router.push("/");
  };

  const onHistory = (e) => {
    e.preventDefault();
    dispatch(refreshPlayerPoint());
    router.push("/history");
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.boxes}>
        <div className={styles.box}>
          <h3>Player One : {player.player1}</h3>
          <p>Move: {player.player1Select}</p>
          <p>Total Match: 5</p>
          <p>Total Win: {player.winCount1}</p>
          <p>Match no: {player.winCount1 + player.winCount2}</p>
          <p>Final Result: {player.player1Point} </p>
          <p>Turn : {board.turn === "O" ? "Player One" : ""}</p>
        </div>
        <div className={styles.box}>
          <h3>player Two : {player.player2}</h3>
          <p>Move: {player.player2Select}</p>
          <p>Total Match: 5</p>
          <p>Total Win: {player.winCount2}</p>
          <p>Match no: {player.winCount1 + player.winCount2}</p>
          <p>Final Result: {player.player2Point} </p>
          <p>Turn : {board.turn === "X" ? "Player Two" : ""}</p>
        </div>
      </section>
      <button onClick={onPlayAgain} className={styles.btn}>
        Home Page
      </button>
      <br /> <br />
      <button onClick={onHistory} className={styles.btn}>
        History
      </button>
      <br /> <br />
      <div className={styles.board}>
        <div className={styles.row}>
          <Square
            val={board.board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />

          <Square
            val={board.board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board.board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className={styles.row}>
          <Square
            val={board.board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board.board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board.board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className={styles.row}>
          <Square
            val={board.board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board.board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board.board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default game;
