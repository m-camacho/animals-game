import React, { useEffect, useState } from "react";
import "./App.scss";
import { Animal, animals, GAME_STATE } from "./constants";
import Button from "react-bootstrap/Button";

function App() {
  const [gameStatus, setGameStatus] = useState(GAME_STATE.IN_PROGRESS);
  const [attempts, setAttempts] = useState(5);
  const [options, setOptions] = useState([...animals]);
  const [hiddenAnimal, setHiddenAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (animals.length + 1));
    setHiddenAnimal(animals[randomIndex]);
  }, []);

  const handleOptionPreesed = (pressedAnimal: Animal) => {
    if (!hiddenAnimal) return;
    if (pressedAnimal.name === hiddenAnimal.name) {
      console.log("GANASTE!!!!");
      setGameStatus(GAME_STATE.PLAYER_WINS);
    } else {
      // Mark option as pressed and reduce the number of attempts
      const updatedOptions = [...options];
      const pressedOption = updatedOptions.find(
        animalOption => animalOption.name === pressedAnimal.name
      );
      if (pressedOption) {
        pressedOption.pressed = true;
        setOptions(updatedOptions);
        setAttempts(attempts - 1);

        if (attempts - 1 === 0) {
          setGameStatus(GAME_STATE.PLAYER_LOSES);
        }
      }
    }
  };

  return (
    <div className={"game " + gameStatus}>
      <div className="game-status-text">
        Te quedan <span>{attempts}</span> intentos{" "}
        {gameStatus !== GAME_STATE.PLAYER_LOSES &&
          "para adivinar el animal escondido : )"}
      </div>
      {gameStatus === GAME_STATE.IN_PROGRESS && (
        <div className="option-buttons">
          {options.map(animalOption => (
            <Button
              key={animalOption.name}
              variant={animalOption.pressed ? "danger" : "primary"}
              disabled={animalOption.pressed}
              onClick={() => handleOptionPreesed(animalOption)}
            >
              {animalOption.name}
            </Button>
          ))}
        </div>
      )}
      {gameStatus === GAME_STATE.PLAYER_LOSES && (
        <>
          <div className="player-loses-text">Perdiste! : (</div>
          <div className="player-loses-text">El animal escondido era:</div>
        </>
      )}
      {hiddenAnimal &&
        [GAME_STATE.PLAYER_WINS, GAME_STATE.PLAYER_LOSES].includes(
          gameStatus
        ) && (
          <div className="hidden-animal">
            <div className="name">{hiddenAnimal.name}</div>
            <img src={hiddenAnimal.imageUrl} alt={hiddenAnimal.name} />
          </div>
        )}
    </div>
  );
}

export default App;
