import Exercises from "../components/ExerciseBox";
import Leaderboard from "../components/Leaderboard";
import { useState } from "react";
import { users } from "../data/users";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(users)

    return (
      <div className="Home">
        Dashboard Page
      <ul>
        <Leaderboard users={currentUser}/>
        <li>Welcome User</li>
        <Exercises users={currentUser} setUsers={setCurrentUser}/>
        <li>Motivational Quote</li>
        <li>Video</li>
      </ul>
      </div>
    );
  }
  