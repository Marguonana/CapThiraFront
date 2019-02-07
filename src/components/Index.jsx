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
import SiteHeaderComp from './src/components/SiteHeaderComp.js';
import SitiFooterComp from './src/components/SiteFooterComp.js';


console.log("test app for nana");
render( <App />, document.getElementById('react-app'),
        <couvertureComp />, document.getElementById('couverture')
);
render(<SiteHeaderComp />, document.getElementById('site-header-component'));
render(<SitiFooterComp />, document.getElementById('site-footer-component'));
