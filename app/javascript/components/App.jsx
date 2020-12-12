import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';
import NewRecord from './components/newRecord';
import NavbarComponent from './components/navBar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <NavbarComponent />
          <div className="container-wrapper">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/new_record" component={NewRecord} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('root');
  app && ReactDOM.render(<App />, app);
});