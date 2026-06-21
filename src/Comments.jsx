import { use } from "react"
import Comment from "./Comment"

export default function Comments ({commentPromise}){
    const comments = use(commentPromise)
    console.log(comments);
    return (
        <div>
            <h2>Comments aree heree: {comments.length}</h2>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    )
}