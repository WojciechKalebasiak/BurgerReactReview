import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
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
      <div className="App">
        <Layout
          toggleSideDrawer={this.toggleSideDrawer}
          showSideDrawer={this.state.showSideDrawer}>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
