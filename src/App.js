
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Todo from './pages/Todo'
import Home from './pages/Home'
import About from './pages/About'
function App() {
 

  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" > Home</Link>
            </li>
            <li>
              <Link to="/todo" > Todo</Link>
            </li>
            <li>
              <Link to="/about" > About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todo" >
          <Todo />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    
  );
}

export default App;
