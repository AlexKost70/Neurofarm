import './App.css';
import { useState } from 'react';
import ScreenChoiceCharacter from './components/screenChoiceCharacter/ScreenChoiceCharacter';
import ScreenLoader from './components/screenLoader/ScreenLoader';
import SelectWindow from './components/selectWindow/SelectWindow';

function App() {
  const [character, setCharacter] = useState();
  const [screen, setScreen] = useState("ScreenLoader");
  return (
    <div className="App">
      {/* <ScreenLoader /> */}
      <ScreenChoiceCharacter />
    </div>
  );
}

export default App;
