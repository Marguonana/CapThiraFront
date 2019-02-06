// render(
//   (<Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <Route path="/about" component={About} />
//       <Route path="/poweredby" component={PoweredBy} />
//     </Route>
//   </Router>), document.getElementById('content')
// );

import React from 'react';
import { render } from 'react-dom';

import App from './src/components/App.js';

console.log("test app for nana");
render( <App />, document.getElementById('react-app'),
        <couvertureComp />, document.getElementById('couverture')
);
