import './App.css';
import { useContext, useEffect } from 'react';
import ScreenChoiceCharacter from './components/screenChoiceCharacter/ScreenChoiceCharacter';
import ScreenLoader from './components/screenLoader/ScreenLoader';
import { AppContext }  from './hoc/AppProvider';
import ScreenHello from './components/screenHello/ScreenHello';

function App() {
  const { screen } = useContext(AppContext);

  return (
    <div className="App">
      { screen === "ScreenLoader" && <ScreenLoader /> }
      { screen === "ScreenChoiceCharacter" && <ScreenChoiceCharacter /> }
      { screen === "ScreenHello" && <ScreenHello /> }
    </div>
  );
}

export default App;
