import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import {Onboarding} from './pages/Onboarding'

function App() {
  return (
    <Router>
      <header>
        <h1>Wizard</h1>
      </header>
      <main>
        <Switch>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;