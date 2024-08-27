import React from 'react';
import logo from '../assets/logoBajacaliforniadream.webp';
const Accueil: React.FC = () => {
  return (
    <div id="accueil">
      <header>
        <img src={logo} alt="Baja California Dream Logo" title="Le logo de Bajacalifornia Dream" className="logo" />

      </header>
    </div>
  );
};

export default Accueil;
