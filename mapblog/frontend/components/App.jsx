import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => (
  <div>
    <h1> is the root</h1>
    <header>
      <Link to="/" className="header-link"><h1>Home</h1></Link>
    </header>
    {children}
  </div>
);

export default App;
