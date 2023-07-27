import './App.css';
import { useContext } from 'react';
import ScreenChoiceCharacter from './components/screenChoiceCharacter/ScreenChoiceCharacter';
import ScreenLoader from './components/screenLoader/ScreenLoader';
import { AppContext }  from './hoc/AppProvider';
import ScreenHello from './components/screenHello/ScreenHello';
import ScreenTutorial from './components/screenTutorial/ScreenTutorial';
import ScreenPlay from './components/screenPlay/ScreenPlay';

function App() {
  const { screen } = useContext(AppContext);

  return (
    <div className="App">
      { screen === "ScreenLoader" && <ScreenLoader /> }
      { screen === "ScreenChoiceCharacter" && <ScreenChoiceCharacter /> }
      { screen === "ScreenHello" && <ScreenHello /> }
      { screen === "ScreenTutorial" && <ScreenTutorial /> }
      { screen === "ScreenPlay" && <ScreenPlay /> }
    </div>
  );
}

export default App;
