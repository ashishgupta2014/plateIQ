import React, {Component} from 'react';
import Leftbodyfixed from './components/left-body-fixed/left-body-fixed.component';
import Rightbody from './components/right-body/right-body.component';
import './App.css';

class App extends Component {
 
 render(){

      return (
          <div className="container-fluid h-100">
            <div className="row h-100">
              <Leftbodyfixed />
              <Rightbody />
            </div>
          </div>
      );
 }
}

export default App;
