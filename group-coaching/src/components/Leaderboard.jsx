import User from "./User";

export default function Leaderboard (props) {
    //Show users
    return(
   
    props.users.map((user) => {
        if (user.type == "Student")
        {
            return <User key={user.id} name={user.name} points={user.points}/>
        }
})
    )
}