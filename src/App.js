// Tools
import React from 'react';

// Components
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

// Styles
import './index.css';

function App() {
  return (
    <div>
     <Navbar title="Github Finder" icon="fa-brands fa-github"/>
      <div>
        <Users />
      </div>



    </div>
  );
}

export default App;
