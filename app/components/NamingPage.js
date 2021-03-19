import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { playerOne, playerTwo } from "../actions";

const NamingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const router = useRouter()
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(playerOne(firstName));
    dispatch(playerTwo(secondName));
    router.push('/game')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Player1 Name"
          type="text"
          name="firstName"
          required
        />
        <input
          defaultValue={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          placeholder="Player2 Name"
          type="text"
          name="secondName"
          required
        />
        <input type ="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NamingPage;
