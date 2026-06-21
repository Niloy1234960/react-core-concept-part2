import { Suspense } from "react";
import "./App.css";
import Todos from "./Todos";

import Friends from "./Friends";
import Posts from "./Posts";
import Comments from "./Comments";
import Player from "./Player";

// const feachUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const postFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const commentFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();
  const postPromise = postFetch();
  const commentPromise = commentFetch();
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>

          <Todos></Todos>

          <Suspense fallback={<h3>Loading.......</h3>}>
            
          </Suspense>

          <Suspense fallback={<h3>Friends are comming please wait....</h3>}>
            <Friends friendsPromise={friendsPromise}></Friends>
          </Suspense>

          <Suspense fallback={<h3>Post ar loading...</h3>}>
            <Posts postPromise={postPromise}></Posts>
          </Suspense>

          <Suspense fallback={<h2>Comments aree comming....</h2>}>
            <Comments commentPromise={commentPromise}></Comments>
          </Suspense>

          {/* <button onClick={handleClick}>Click me</button>
          <button onClick={handleClick2}>Click me 2</button> */}
          {/* <button onClick={() => alert("clicked done 3")}>Click me 3</button> */}
          {/* <button onClick={() => handleAdd10(20)}>Add 10</button> */}

          {/* <Counter></Counter> */}

          <Player></Player>
        </div>
      </section>
    </>
  );
}

export default App;
