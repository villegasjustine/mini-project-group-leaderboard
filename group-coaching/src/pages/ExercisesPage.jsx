import { useState } from "react";
import ExerciseBox from "../components/Exercises";
import { useUserContext } from "../context/UserContext";
import { users } from "../data/users";
import AssignExercise from "../components/AssignExercise";
import AssignExerciseTest from "../components/AssignExerciseTest";
import Exercises from "../components/Exercises";



export default function ExercisesPage() {
  const [footwork, setFootwork] = useState("")
  const [racket, setRacket] = useState("")
  const [strength, setStrength] = useState("")
 
  const {currentUser} = useUserContext();

  return (
    <div className="ExercisesPage">
      <br></br>
      Exercises for {currentUser.name}
      <br></br>
      {/* Show exercises assigned for user */}
      
      <AssignExercise 
        footwork={footwork} setFootwork={setFootwork}
        racket={racket} setRacket={setRacket}
        strength={strength} setStrength={setStrength}/>

      <Exercises 
        footwork={footwork}
        racket={racket}
        strength={strength}/>

    
    </div>
  );
}
