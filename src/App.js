import React from 'react';
import './sass/materialize.scss';
import './App.css';
import Button from './04/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>안녕하쇼</div>
          </div>
        </nav>
        <h1>머티리얼 CSS</h1>
        <Button small>버튼임</Button>
      </div>
    );
  }
}

export default App;
