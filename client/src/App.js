import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Router} from '@reach/router';
import Create from './Views/Create';
import Main from './Views/Main';
import Show from './Views/Show';
import Edit from "./Views/Edit";


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Create path="/create"/>
        <Show path="/api/product/show/:id"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
