import React from 'react'
import styles from '../../styles/Game.module.css';

const  Square = ({val, chooseSquare}) => {
   
    return (
        <div className={styles.square} onClick={chooseSquare}>
        {val}
      </div>
    )
}

export default Square
