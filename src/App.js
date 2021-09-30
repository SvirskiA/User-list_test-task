import React, { Component } from "react";

import Main from "./components/Main";

class App extends Component {
  state = {
    employees: [],
    worklog: []
  };

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
