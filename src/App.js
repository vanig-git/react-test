import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';


import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuContainer';
import logo1 from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}
export default App;
