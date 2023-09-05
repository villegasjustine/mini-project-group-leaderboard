import { useState } from "react";
import { exercises } from "../data/exercises";

export default function AssignExerciseTest() {
  const [footworkExercise, setFootworkExercise] = useState("");
  const [racketExercise, setRacketExercise] = useState("");
  const [strengthExercise, setStrengthExercise] = useState("");
 

  const handleAddExercise = () => {
    // Create a new exercise object based on selected values
    const newExercise = {
      footwork: footworkExercise,
      racket: racketExercise,
      strength: strengthExercise,
      
    };

    
    setFootworkExercise("");
    setRacketExercise("");
    setStrengthExercise("");
    
  };

  return (
    <>
      <div className="AssignExercise">
        <label>
          {" "}
          Choose Footwork Exercise:
          <select
            value={footworkExercise}
            onChange={(e) => setFootworkExercise(e.target.value)}
          >
            {footworkSelect.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {" "}
          Choose Racket Exercise:
          <select
            value={racketExercise}
            onChange={(e) => setRacketExercise(e.target.value)}
          >
            {racketSelect.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {" "}
          Choose Strength Exercise:
          <select
            value={strengthExercise}
            onChange={(e) => setStrengthExercise(e.target.value)}
          >
            {strengthSelect.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          {" "}
          Choose Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>

      {/* Display the selected exercises */}
      <div>
        {program.map((exercise, index) => (
          <button key={index}>{`${exercise.footwork} + ${exercise.racket} + ${exercise.strength} (${exercise.difficulty})`}</button>
        ))}
      </div>
    </>
  );
}
