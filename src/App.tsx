import React, { useEffect, useState } from "react";
import "./App.scss";
import { Animal, animals } from "./constants";

function App() {
  const [randomAnimal, setRandomAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (animals.length + 1));
    setRandomAnimal(animals[randomIndex]);
  }, []);

  return (
    <div className="game">
      {randomAnimal && (
        <div>
          <div>{randomAnimal.name}</div>
          <img src={randomAnimal.imageUrl} alt={randomAnimal.name} />
        </div>
      )}
    </div>
  );
}

export default App;
