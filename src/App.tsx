import React, { useEffect, useState } from "react";
import "./App.scss";
import { Animal, animals, GAME_STATE, hiddenUrl } from "./constants";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [gameStatus, setGameStatus] = useState(GAME_STATE.IN_PROGRESS);
  const [attempts, setAttempts] = useState(5);
  const [options, setOptions] = useState([...animals]);
  const [hiddenAnimal, setHiddenAnimal] = useState<Animal | null>(null);

  const [hintIndex, setHintIndex] = useState(0);

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
        (animalOption) => animalOption.name === pressedAnimal.name
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

  const showHint = () => {
    if (!hiddenAnimal || !hiddenAnimal.hints) return;
    const hintsLen = hiddenAnimal.hints.length;
    if (hintIndex >= hintsLen) {
      toast("No more hints available");
    }
    toast(hiddenAnimal.hints[hintsLen - hintIndex - 1]);
    setHintIndex(hintIndex + 1);
  };

  return (
    <div className={"game " + gameStatus}>
      <div className="container">
        <div className="game-status-text">
          Te quedan <span>{attempts}</span> intentos{" "}
          {gameStatus !== GAME_STATE.PLAYER_LOSES &&
            "para adivinar el animal escondido : )"}
        </div>
        {gameStatus === GAME_STATE.IN_PROGRESS && (
          <div className="option-buttons">
            <Button variant="info" onClick={showHint}>
              Hint
            </Button>
            {options.map((animalOption) => (
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
        {hiddenAnimal && gameStatus === GAME_STATE.IN_PROGRESS && (
          <div className="hidden-animal">
            <img src={hiddenUrl} alt="hidden-animal" />
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
