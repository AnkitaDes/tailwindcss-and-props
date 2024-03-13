import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    name: "Jesika",
    age: 25,
  };
  let myArr = [1, 2, 3, 4, 5];
  function myfunc() {
    console.log("You are the best");
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card
        username="Olivia"
        btnText="Click me"
        sendObj={myObj}
        sendArr={myArr}
        sendFunc={myfunc}
      />
      <Card username="Anita" btnText="visit me" />
    </>
  );
}

export default App;
