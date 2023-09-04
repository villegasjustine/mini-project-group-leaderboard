import React, { useState, useEffect } from "react";
import { exercises } from "../data/exercises";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useUserContext } from "../context/UserContext";

const getRandomExercise = (category) => {
  const exercisesInCategory = exercises.filter(
    (exercise) => exercise.category === category
  );
  const randomIndex = Math.floor(Math.random() * exercisesInCategory.length);
  return exercisesInCategory[randomIndex]?.name || "No exercise available";
};



export default function Exercises(props) {
  const [footworkExercise, setFootworkExercise] = useState("");
  const [racketExercise, setRacketExercise] = useState("");
  const [strengthExercise, setStrengthExercise] = useState("");
  const [onClickCount, setOnClickCount] = useState(0);
  
  const {currentUser, handleUpdateUser} = useUserContext(); 
  const users = props.users;
  const setUsers = props.setUsers;

    function userCheck (name) {
        let foundUser = users.find((user) => user.name == name);
        foundUser.points += 100;
        setUsers(users);
    }

  useEffect(() => {
    setFootworkExercise(getRandomExercise("footwork"));
    setRacketExercise(getRandomExercise("racket"));
    setStrengthExercise(getRandomExercise("strength"));
  }, [users]);

  return (
    <div>
      <h2>Exercises To Do</h2>
      <div>
        <Button variant="contained" 
        onClick={() => userCheck(currentUser.name)}>
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            Footwork: {footworkExercise}
          </Box>
        </Button>
        <Button onClick={() => userCheck(currentUser.name)}>
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        Racket: {racketExercise}
          </Box>
        </Button>
        <Button variant = "contained">
          <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
            Strength: {strengthExercise}
          </Box>
        </Button>
        </div>
    </div>
  );
}
