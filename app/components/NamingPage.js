import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from '../../styles/Naming.module.css';
import { useSelector, useDispatch } from "react-redux";
import { playerOne, playerTwo } from "../actions";

const NamingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

 

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(playerOne(firstName));
    dispatch(playerTwo(secondName));
    router.push('/game')
  };

  const moveHistory =(e) =>{
    e.preventDefault();
    router.push('/history');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <h1>Tic Tac Toe</h1>
        <div className="form-group">
            <label htmlFor="">Player One</label>
            <input 
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Player1 Name"
            name="firstName"
            type="text" 
            className={styles.formControl} 
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="">Player Two</label>
            <input 
              defaultValue={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              placeholder="Player2 Name"
              name="secondName"
              type="text" 
              className={styles.formControl} 
              required/>
        </div>
        <input type="submit" className={styles.btn} value="Submit"/>
        <br/><br/><br/>
        <button  onClick={moveHistory} className={styles.btn}>History</button>
      </form>
    </div>
  );
};

export default NamingPage;
