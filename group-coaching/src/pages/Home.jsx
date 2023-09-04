import Exercises from "../components/ExerciseBox";
import Leaderboard from "../components/Leaderboard";
import { useState } from "react";
import { users } from "../data/users";
import { useUserContext } from "../context/UserContext";

export default function Home() {
  const [currentUser, setCurrentUser] = useState("");
  console.log(currentUser)

  return (
    <div className="Home">
      Welcome {currentUser.name}
      <ul>
        <Leaderboard users={users} />

        <Exercises users={currentUser} setUsers={setCurrentUser} />
        <li>Motivational Quote</li>
        <li>Video</li>
      </ul>
    </div>
  );
}
