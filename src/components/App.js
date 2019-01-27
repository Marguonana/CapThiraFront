import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';


export class App extends React.Component {
  render(){
    return (
       <div>
        <header>
          <h1>React Starterify {version}</h1>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>
        <section>
          { 'Welcome to React Starterify'}
        </section>
      </div>
    );
  }
}


App.propTypes = { children: React.PropTypes.object };

export default App;
