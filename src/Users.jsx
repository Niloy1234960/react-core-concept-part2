import { use } from "react"

export default function Users({feachUsers}){

    const users = use(feachUsers);
    // console.log(users);
    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    )
}