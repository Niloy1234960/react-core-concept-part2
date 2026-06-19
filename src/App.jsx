import "./App.css";
import Counter from "./Counter";
import Player from "./Player";

function App() {

  // function handleClick(){
  //   alert("I'm clicked")
  // }

  // const handleClick2 = () => {
  //   alert("Clicked done")
  // }

  // const handleAdd10 = (num) => {
  //   const newNum = num + 10;
  //   alert(newNum)
  // }
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          {/* <button onClick={handleClick}>Click me</button>
          <button onClick={handleClick2}>Click me 2</button>
          <button onClick={() => alert("clicked done 3")}>Click me 3</button>
          <button onClick={() => handleAdd10(20)}>Add 10</button> */}

          <Counter></Counter>
          
          <Player></Player>
        </div>
      </section>
    </>
  );
}

export default App;
