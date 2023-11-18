import { useState, useEffect } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://apisimpsons.fly.dev/api/personajes");
      const data = await res.json();
      setCharacters(data.docs);
      // console.log(data);
    };
    fetchData();
  }, []);
  console.log(characters);
  return (
    <>
      <h1> Los Simpsons</h1>
      {characters.map((character)=>{
        return(
          <Card  character={character}/>
        )
      })}
    </>
  );
}

export default App;
