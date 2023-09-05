import Exercises from "../components/ExerciseBox";
import Leaderboard from "../components/Leaderboard";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { users } from "../data/users";
import BasicCard from "../components/BasicCard";
import Quote from "../components/Quote";
import GetQuote from "../components/GetQuote";

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
      <Quote></Quote>
     <GetQuote/>
      <ul>
        <Leaderboard users={user} />

        <Exercises users={user} setUsers={updateUsers} />
        <li>Video</li>
      </ul>
    </div>
  );
}
