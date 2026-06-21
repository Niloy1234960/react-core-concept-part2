export default function Todo ({todo}){
    return (
        <div className="card">
            <p>UserId: {todo.userId}</p>
            <p>Id: {todo.id}</p>
            <p>Title: {todo.title}</p>
        </div>
    )
}