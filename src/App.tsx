import React, { useEffect, useState } from "react";
import "./App.scss";
import { Animal, animals } from "./constants";
import Button from "react-bootstrap/Button";

function App() {
  const [hiddenAnimal, setHiddenAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (animals.length + 1));
    setHiddenAnimal(animals[randomIndex]);
  }, []);

  return (
    <div className="game">
      <div className="option-buttons">
        {animals.map(animal => (
          <Button
            key={animal.name}
            onClick={() => {
              if (hiddenAnimal && animal.name === hiddenAnimal.name) {
                console.log("GANASTE!!!!");
              } else {
                console.log("ERROR");
              }
            }}
          >
            {animal.name}
          </Button>
        ))}
      </div>
      {hiddenAnimal && (
        <div className="hidden-animal">
          <div className="name">{hiddenAnimal.name}</div>
          <img src={hiddenAnimal.imageUrl} alt={hiddenAnimal.name} />
        </div>
      )}
    </div>
  );
}

export default App;
