import { useState } from "react";
import { exercises } from "../data/exercises";

export default function AssignExercise(props) {
  const [footworkExercise, setFootworkExercise] = useState("");
  const [racketExercise, setRacketExercise] = useState("");
  const [strengthExercise, setStrengthExercise] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [program, setProgram] = useState('')

  const footworkSelect = exercises.filter(
    (exercise) => exercise.category == "footwork"
  );
  console.log(footworkSelect);

  const racketSelect = exercises.filter(
    (exercise) => exercise.category == "racket"
  );
  console.log(racketSelect);

  const strengthSelect = exercises.filter(
    (exercise) => exercise.category == "strength"
  );
  console.log(strengthSelect);

  return (
    <>
      <div className="AssignExercise">

        <label>
          {" "}
          Choose Footwork Exercise:
          <select
            value={footworkExercise}
            onChange={(e) => {
              props.setFootwork(e.target.value);
              setFootworkExercise(e.target.value)
            }}
          >
            {footworkSelect.map((f) => (
              <option key={f.id} value={f.name}>
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
            onChange={(e) => {
              props.setRacket(e.target.value);
              setRacketExercise(e.target.value)
            }}
          >
            {racketSelect.map((f) => (
              <option key={f.id} value={f.name}>
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
            onChange={(e) => {
              props.setStrength(e.target.value);
              setStrengthExercise(e.target.value)
            }}
          >
            {strengthSelect.map((f) => (
              <option key={f.id} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        <button></button>
      </div>
    </>
  );
}
