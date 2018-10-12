import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary.js";
import Burger from "../../components/Burger/Burger.js";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [ {type:'salat'}, {type:'bacon'}, {type:'cheese'}, {type:'cheese'}]
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build controls</div>
      </Aux>
    );
  }
}
export default BurgerBuilder;
