import Exercises from "../components/Exercises";
import Leaderboard from "../components/Leaderboard";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { users } from "../data/users";
import BasicCard from "../components/BasicCard";
import Quote from "../components/Quote";
import GetQuote from "../components/GetQuote";
import ExerciseDisplay from "../components/ExerciseDisplay";
import ButtonGroup from "../components/VerticalButtons";
import VerticalButtons from "../components/VerticalButtons";
import KanbanCardDemo from "../components/KanbanCardDemo";

export default function Home() {
  const [user, setUser] = useState(users);
  const {currentUser} = useUserContext();

  function updateUsers(newUsers) {
    setUser(newUsers)
    console.log(user)
    
  }

  return (
    <div className="Home">
      Welcome {currentUser.name}
      <Quote></Quote>
     <GetQuote/>
      <ul>
        <KanbanCardDemo/>
        <Leaderboard users={user} />

        <ExerciseDisplay users={user} setUsers={updateUsers} />
        
        <li>Video</li>
      </ul>
    </div>
  );
}
