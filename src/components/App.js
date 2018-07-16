import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//App Components
import Home from './Home';
import About from './About';
import Header from './Header';
import Courses from './Courses';
import Teachers from './Teachers';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/teachers" component={Teachers} />
    </div>
  </BrowserRouter>
);

export default App;