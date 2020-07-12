import React from 'react';
import { Grommet } from 'grommet';
import './App.css';
import AppRouter from './navigation/AppRouter';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <Grommet theme={theme}>
        <AppRouter />
      </Grommet>
    </div>
  );
}

export default App;
