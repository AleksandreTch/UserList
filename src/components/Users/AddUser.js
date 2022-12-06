// Native imports
import React from "react";
// Styling
import classes from "./AddUser.module.css";
// Custom components
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button 
            type="submit" 
            value="Add User"/>
      </form>
    </Card>
  );
};

export default AddUser;
