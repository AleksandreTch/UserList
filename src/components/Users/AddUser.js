// Native imports
import React, {useState} from "react";
// Styling
import classes from "./AddUser.module.css";
// Custom components
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const addUserHandler = (e) => {
    e.preventDefault();

    // check if the inputs are empty
    if(enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
      return;
    }

    // check if the number is lower then a certain number (in our case we'll put 1)
    if(+enteredAge < 1){
      return;
    }

    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) =>{
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) =>{
    setEnteredAge(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
            id="username" 
            type="text"
            value={enteredUsername} 
            onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input 
            id="age" 
            type="number" 
            value={enteredAge}
            onChange={ageChangeHandler} />
        <Button 
            type="submit" 
            value="Add User"/>
      </form>
    </Card>
  );
};

export default AddUser;
