import { useState } from "react";
import { StartScreen, PlayScreen } from "./Screens";
import Switch from "./switch";

function App() {
  const [gameState, setGameState] = useState("start");

  switch (gameState) {
    case "start":
      return (<>
        <Switch />
        <StartScreen start={() => setGameState("play")} />;
      </>)
    case "play":
      return (<>
        <Switch />
        <PlayScreen end={() => setGameState("start")} />;
      </>)
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
