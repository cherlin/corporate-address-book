import React from 'react';
import { Route } from 'react-router-dom';
import Header from './containers/Header';
import ContactsContainer from './containers/ContactsContainer';
import ContactDetailsContainer from './containers/ContactDetailsContainer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={ContactsContainer} />
      <Route path="/contact/:id" component={ContactDetailsContainer} />
    </React.Fragment>
  );
}

export default App;
