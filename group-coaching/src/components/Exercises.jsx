import React, { useState, useEffect } from "react";
import { exercises } from "../data/exercises";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useUserContext } from "../context/UserContext";
import ButtonGroup from "@mui/material/ButtonGroup";

const getRandomExercise = (category) => {
  const exercisesInCategory = exercises.filter(
    (exercise) => exercise.category === category
  );
  const randomIndex = Math.floor(Math.random() * exercisesInCategory.length);
  return exercisesInCategory[randomIndex]?.name || "No exercise available";
};

export default function Exercises(props) {
  // const [footworkExercise, setFootworkExercise] = useState("Wait to be assigned");
  // const [racketExercise, setRacketExercise] = useState("Wait to be assigned");
  // const [strengthExercise, setStrengthExercise] = useState("Wait to be assigned");

  const { currentUser } = useUserContext();
  const users = props.users;
  const setUsers = props.setUsers;

  function handlePoints(name) {
    let foundUser = users.find((user) => user.name == name);
    foundUser.points += 100;

    let updatedUsers = [...users];
    setUsers(updatedUsers);
  }

  // useEffect(() => {
  //   setFootworkExercise(getRandomExercise("footwork"));
  //   setRacketExercise(getRandomExercise("racket"));
  //   setStrengthExercise(getRandomExercise("strength"));
  // }, [exercises]);

  return (
    <div className="ExerciseBox">
      <h2>Exercises To Do</h2>
      <Box className="ExerciseBox"
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <div className="ExerciseBox">
          <ButtonGroup className="ExerciseBox"
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button
              variant="contained"
              sx={{ p: 5 }}
              onClick={() => handlePoints(currentUser.name)}
            >
              Footwork: {props.footwork}
            </Button>
            <Button onClick={() => handlePoints(currentUser.name)}>
              <Box component="span" sx={{ p: 5 }}>
                Racket: {props.racket}
              </Box>
            </Button>
            <Button
              variant="contained"
              onClick={() => handlePoints(currentUser.name)}
            >
              <Box component="span" sx={{ p: 5 }}>
                Strength: {props.strength}
              </Box>
            </Button>
          </ButtonGroup>
        </div>
      </Box>
    </div>
  );
}
