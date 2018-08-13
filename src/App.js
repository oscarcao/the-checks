import React, { Component } from 'react';
import './styles/css/main.css';
import Page from "./Containers/Page";

class App extends Component {
  render() {
    return (
      <div className="page-content" id="page-content">
          <div className="container">
              <Page></Page>
          </div>
      </div>
    );
  }
}

export default App;
