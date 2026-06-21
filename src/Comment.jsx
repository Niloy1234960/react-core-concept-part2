export default function Comment({comment}){
    // console.log(comment);
    return (
        <div className="card">
            <p>PostId: {comment.postId}</p>
            <p>Id: {comment.id}</p>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
        </div>
    )
}