// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import UserMenu from 'src/components/User/Menu';
import EditUserProfil from 'src/components/User/Profil/Edit';
import ShowUserProfil from 'src/components/User/Profil/Show';
// import EditUserProfil from 'src/components/UserProfil/EditUserProfil';

// == Composant
const App = () => (
  <div className="app">
    <EditUserProfil />
  </div>
);

// == Export
export default App;
