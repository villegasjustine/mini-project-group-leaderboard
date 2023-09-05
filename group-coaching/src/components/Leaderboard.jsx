import User from "./User"
import { useEffect } from "react"

export default function Leaderboard (props) {
    
   return props.users.map((user) => {
        if (user.type == "Student")
        {
            return <User 
            key={user.id} 
            avatar={user.avatar}
            name={user.name} 
            points={user.points}/>
        }
})
    
}