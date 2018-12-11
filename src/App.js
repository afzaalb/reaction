import React, { Component } from 'react';
import 'spectre.css/dist/spectre.min.css';
import Circle from './Circle';
import List from './List';

class App extends Component {
  state = {
    items: ['Basheer'],
    size: 80,
    field: ''
  }

  onChangeHandler(e){
    this.setState(
      { 
        field: e.target.value
      }
    );
  }

  onFormSubmit(e){
    e.preventDefault();

    const { items, field } = this.state;
    this.setState(
      { 
        items: [...items, field],
        field: ''
      }
    )
  }

  render() {
    const { items, size, field } = this.state;

    return (
      <div className="container" style={{maxWidth:'640px'}}>
        <h3>App made with Spectre.css</h3>
        <div className="columns">
          <form
            onSubmit={e => this.onFormSubmit(e)}
            className="column col-12 d-flex mb-2"
          >
            <input
              onChange={e => this.onChangeHandler(e)}
              type="text"
              value={field}
              className="form-input mr-2"
              placeholder="Enter list item"
              required
            />
            <button
              type="submit"
              className="col-ml-auto btn"
            >
              Add list item
            </button>
          </form>
          <div className="column col-12">
            {items.length
              && <ul><List items={items} /></ul>
            }
          </div>
        </div>
        <div className="text-center">
          <Circle width={size} height={size} />
        </div>
      </div>
    );
  }
}

export default App;
