import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Accueil from './components/Accueil/Accueil';
import { Style } from './styles/Styles';

const App: React.FC = () => {
  return (
    <>
      <Style />
      <div className="App">
        <NavBar />
        <Accueil />
      </div>
    </>
  );
};

export default App;
