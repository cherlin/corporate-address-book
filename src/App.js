import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ContactsPage from './containers/ContactsPage';
import ContactDetailsPage from './containers/ContactDetailsPage';
import { fetchContacts } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchContacts('/?seed=foobar&results=100&inc=name,location,email,login,phone,cell,picture');
  }

  render() {
    return (
      <React.Fragment>
        <Header title="The Corporate Address Book" />
        <Route exact path="/" component={ContactsPage} />
        <Route path="/contact/:id" component={ContactDetailsPage} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: endpoint => dispatch(fetchContacts(endpoint)),
});

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(App));
