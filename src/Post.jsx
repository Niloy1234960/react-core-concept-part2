export default function Post({ post }) {
  return (
    <div >
      <div className="card">
        <h3>Post id: {post.id}</h3>
        <h3>Post title: {post.title}</h3>
        <h3>Post body: {post.body}</h3>
      </div>
    </div>
  );
}
