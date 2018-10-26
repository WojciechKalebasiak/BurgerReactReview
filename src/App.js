import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    };
  }
  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout
            toggleSideDrawer={this.toggleSideDrawer}
            showSideDrawer={this.state.showSideDrawer}>
            <BurgerBuilder />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
