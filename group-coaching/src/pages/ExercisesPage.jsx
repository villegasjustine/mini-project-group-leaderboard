import { useState } from "react";
import ExerciseBox from "../components/ExerciseBox";
import { useUserContext } from "../context/UserContext";
import { users } from "../data/users";
import AssignExercise from "../components/AssignExercise";
import AssignExerciseTest from "../components/AssignExerciseTest";
import Exercises from "../components/ExerciseBox";



export default function ExercisesPage() {
 
  const {currentUser} = useUserContext();

  return (
    <div className="ExercisesPage">
      Exercises for {currentUser.name}
      <br></br>
      Show exercises assigned for user
      
      <AssignExercise/>
      <Exercises/>
      
    </div>
  );
}
