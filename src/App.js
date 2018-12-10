import React, { Component } from 'react';
import 'spectre.css/dist/spectre.min.css';
import Circle from './Circle';
import List from './List';

class App extends Component {
  render() {
    const items = ['Basheer','Shabeer','Rasheed'];

    return (
      <div className="container" style={{maxWidth:'760px'}}>
        <h3 className="mt-2">App made with Spectre.css</h3>
        <div className="columns">
          <div className="column col-6 text-center">
            <Circle width={80} height={80} />
          </div>
          <div className="column col-6">
            <List items={items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
