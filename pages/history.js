import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../styles/History.module.css";

function history() {
  const historyData = useSelector((state) => state.show.data);
  let newHistory = [].concat(...historyData);
  const router = useRouter();

  const moveHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      <h1 className="header">History Page</h1>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        {newHistory.map((history, i) => (
          <tbody key={i}>
            <tr key={i}>
              <td>{history.name}</td>
              <td>{history.point}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <br />
      <div className={styles.buttons}>
        <div className={styles.actionButton}>
          <button
            name="submit"
            className={styles.actionButton}
            type="submit"
            onClick={moveHome}
            value="Save"
          >
            Home Page
          </button>
          <p id="saved"></p>
        </div>
      </div>
    </div>
  );
}

export default history;
