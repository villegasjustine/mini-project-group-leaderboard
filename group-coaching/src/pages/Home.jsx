import Exercises from "../components/ExerciseBox";
import Leaderboard from "../components/Leaderboard";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { users } from "../data/users";

export default function Home() {
  const [user, setUser] = useState(users);
  const {currentUser} = useUserContext();

  function updateUsers(newUsers) {
    setUser(newUsers)
    console.log("updated users")
    console.log(user)
    
  }

  return (
    <div className="Home">
      Welcome {currentUser.name}
      <ul>
        <Leaderboard users={user} />

        <Exercises users={user} setUsers={updateUsers} />
        <li>Motivational Quote</li>
        <li>Video</li>
      </ul>
    </div>
  );
}
