export default function Friend({friend}) {
    return (
        <div className="card">
            <h3>Friends:</h3>
            <p>Name: {friend.name}</p>
            <p>UserName: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Address: {friend.address.city}</p>
            <p>Street: {friend.address.street}</p>
        </div>
    )
}