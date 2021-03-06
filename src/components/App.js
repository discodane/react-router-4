import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch, 
} from 'react-router-dom';

//App Components
import Home from './Home';
import About from './About';
import Header from './Header';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:teachersName" component={Featured} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;