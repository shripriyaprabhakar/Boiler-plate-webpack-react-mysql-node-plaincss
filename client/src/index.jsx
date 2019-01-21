import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Comp1 from './components/comp1.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

