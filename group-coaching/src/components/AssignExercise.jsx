import { useState } from "react";
import { exercises } from "../data/exercises";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { blue } from "@mui/material/colors";
import { useExerciseContext } from "../context/ExerciseContext";
import { Button } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250, 
    },
  },
};

function getStyles(exercises, name, theme) {
  return {
    fontWeight:
      exercises.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AssignExercise(props) {
  const [footworkExercise, setFootworkExercise] = useState("");
  const [racketExercise, setRacketExercise] = useState("");
  const [strengthExercise, setStrengthExercise] = useState("");
  
  const {handleUpdateExercise} = useExerciseContext();

  const handleAssignExercise = () => {
    handleUpdateExercise({
      footwork: footworkExercise,
      racket: racketExercise,
      strength: strengthExercise,
    });
  }

  const footworkSelect = exercises.filter(
    (exercise) => exercise.category == "footwork"
  );
  // console.log(footworkSelect);

  const racketSelect = exercises.filter(
    (exercise) => exercise.category == "racket"
  );
  // console.log(racketSelect);

  const strengthSelect = exercises.filter(
    (exercise) => exercise.category == "strength"
  );
  // console.log(strengthSelect);
    // console.log(handleUpdateExercise)
    
  return (
    <>
      <div className="AssignExercise">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="assign-exercise-multiple">Footwork</InputLabel>
          <Select
            id="assign-exercise-dropdown"
            value={footworkExercise}
            onChange={(e) => {
              props.setFootwork(e.target.value);
              setFootworkExercise(e.target.value);
            }}
            input={<OutlinedInput label="Footwork" />}
            MenuProps={MenuProps}
          >
            {footworkSelect.map((f) => (
              <MenuItem color="black" key={f.id} value={f.name} style={{ color: "black" }}></MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="assign-exercise-multiple">Racket</InputLabel>
          <Select
            id="assign-exercise-dropdown"
            value={racketExercise}
            onChange={(e) => {
              props.setRacket(e.target.value);
              setRacketExercise(e.target.value);
            }}
            input={<OutlinedInput label="Racket" />}
            MenuProps={MenuProps}
          >
            {racketSelect.map((f) => (
              <MenuItem key={f.id} value={f.name}></MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="assign-exercise-multiple">Strength</InputLabel>
          <Select
            id="assign-exercise-multiple"
            value={strengthExercise}
            onChange={(e) => {
              props.setStrength(e.target.value);
              setStrengthExercise(e.target.value);
            }}
            input={<OutlinedInput label="Strength" />}
            MenuProps={MenuProps}
          >
            {strengthSelect.map((f) => (
              <MenuItem 
              key={f.id} 
              value={f.name}
              color="secondary"></MenuItem>
            ))}
          </Select>
        </FormControl>

       <Button sx={{ m: 2, width: 300 }} onClick={handleAssignExercise}>Assign Exercise</Button>
       </div>
        {/* <label>
          {" "}
          Choose Racket Exercise:
          <select
            value={racketExercise}
            onChange={(e) => {
              props.setRacket(e.target.value);
              setRacketExercise(e.target.value);
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
              setStrengthExercise(e.target.value);
            }}
          >
            {strengthSelect.map((f) => (
              <option key={f.id} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
        </label> */}
     
    </>
  );
}
