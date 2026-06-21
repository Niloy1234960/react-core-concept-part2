import { use } from "react"
import Post from "./Post";

export default function Posts ({postPromise}){
    const posts = use(postPromise)
    // console.log(postPromise);
    return (
        <div>
            <h1>Heree is posts...</h1>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    )
}