import * as React from 'react';
import PerkGenerator from 'src/logic/PerkGenerator';
import './App.css';
import logo from './dbd.png';

class App extends React.Component {

  private generator = new PerkGenerator();
  private perks = this.generator.getPerks();

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rou|ette</h1>
        </header>
        <div>
          <div style={{float:"left"}}>
            <img src={this.perks[0].image} />
            <p>{this.perks[0].name}</p>
          </div>
          <div style={{float:"left"}}>
            <img src={this.perks[1].image} />
            <p>{this.perks[1].name}</p>
          </div>
          <div style={{float:"left"}}>
            <img src={this.perks[2].image} />
            <p>{this.perks[2].name}</p>
          </div>
          <div style={{float:"left"}}>
            <img src={this.perks[3].image} />
            <p>{this.perks[3].name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
