import React from 'react';
import { dependencies, devDependencies } from '../../package.json';

export class PoweredBy extends React.Component {
  render(){
      return (
        <div>
          <h2>Powered by</h2>
          <a href="https://david-dm.org/granze/react-starterify">
            <img src="https://david-dm.org/granze/react-starterify/status.svg" alt="deps status" />
          </a>
          &nbsp;
          <a href="https://david-dm.org/granze/react-starterify#info=devDependencies">
            <img src="https://david-dm.org/granze/react-starterify/dev-status.svg" alt="dev deps status" />
          </a>

        </div>
      );
  }
}