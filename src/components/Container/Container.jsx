import { useState } from "react";
import { USERS } from "../../constants/users";

const Container = () => {
    const [position, setPosition] = useState(0)
    return (
        <>
        <img src={USERS[position].profileImage} alt="Foto" />
        <h1>Name: {USERS[position].name}</h1>
        <p>User: {USERS[position].username}</p>
        <p>Email: {USERS[position].email}</p>
        <button onClick={()=> next(position,setPosition)}>Previous</button>
        <button onClick={()=> back(position,setPosition)}>Next</button>
        </>
    )
};

const next = (position, setPosition) => {
    if (position < 6) {
      setPosition(position + 1);
    }
  };
  
const back = (position, setPosition) => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
export default Container;