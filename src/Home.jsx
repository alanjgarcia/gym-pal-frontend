import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { UsersIndex } from "./UsersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ExerciseIndex } from "./ExerciseIndex";
import { RoutinesIndex } from "./RoutineIndex";
import { RoutinesNew } from "./RoutinesNew";

export function Home() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const [routines, setRoutines] = useState([]);

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  useEffect(handleIndexRoutines, []);

  useEffect(handleIndexExercises, []);

  useEffect(handleIndexUsers, []);

  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <h1>Welcome to React!</h1>
      <UsersIndex users={users} />
      <ExerciseIndex exercises={exercises} />
      <RoutinesIndex routines={routines} />
      <RoutinesNew onCreateRoutine={handleCreateRoutine} />
    </div>
  );
}
