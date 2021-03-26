import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ProductList/>
            </Route>
            <Route exact path="/products/:id">
              <ProductDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
