import * as React from 'react';
import PerkGenerator from 'src/logic/PerkGenerator';
import './App.css';
import logo from './dbd.png';

class App extends React.Component {

  private generator = new PerkGenerator();

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rou|ette</h1>
        </header>
        <p>{this.generator.getPerksAsString()}</p>
      </div>
    );
  }
}

export default App;
