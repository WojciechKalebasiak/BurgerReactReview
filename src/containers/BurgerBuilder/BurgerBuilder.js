import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary.js";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/buildControls/buildControls";
import Modal from "../../components/UI/Modal/Modal.js";
const INGREDIENT_PRICES = {
  meat: 1.2,
  onion: 0.4,
  cheese: 0.4,
  tomato: 0.5,
  bacon: 0.7,
  salat: 0.5,
  pepper: 0.6
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      price: 2,
      purchaseble: false,
      showSummary: false,
      confirmed: false
    };
  }
  hideModal = () => {
    this.setState({ showSummary: false });
  };
  countIngredients = () => {
    const ingObject = {};
    this.state.ingredients.forEach(ing => {
      if (!ingObject[ing.type]) {
        ingObject[ing.type] = 1;
      } else {
        ingObject[ing.type] = ingObject[ing.type] + 1;
      }
    });
    return Object.keys(ingObject).map((element, index) => {
      return {
        type: element,
        key: index,
        amount: ingObject[element]
      };
    });
  };
  showSummary = () => {
    this.setState({ showSummary: true });
  };
  checkIfPurchaseble = ingredients => {
    const amountofIngredients = ingredients.length;
    if (amountofIngredients > 0) {
      this.setState({ purchaseble: true });
    } else {
      this.setState({ purchaseble: false });
    }
  };
  addIngredient = name => {
    const newIngredient = {
      type: name
    };
    const newIngredients = [...this.state.ingredients, newIngredient];
    this.setState({
      ingredients: newIngredients,
      price: this.state.price + INGREDIENT_PRICES[newIngredient.type]
    });
    this.checkIfPurchaseble(newIngredients);
  };
  deleteIngredient = ingIndex => {
    let deletedIngredient;
    const newIngredients = this.state.ingredients.filter((ing, index) => {
      if (ingIndex !== index) {
        return true;
      } else {
        deletedIngredient = ing;
        return false;
      }
    });
    this.setState({
      ingredients: newIngredients,
      price: this.state.price - INGREDIENT_PRICES[deletedIngredient.type]
    });
    this.checkIfPurchaseble(newIngredients);
  };
  render() {
    return (
      <Aux>
        {this.state.showSummary ? (
          <Modal
            hide={this.hideModal}
            ingredients={this.countIngredients()}
            price={this.state.price.toFixed(2)}
            show={this.state.showSummary}
            confirm={() => this.setState({ confirmed: true })}
          />
        ) : null}
        <Burger
          ingredients={this.state.ingredients}
          delete={this.deleteIngredient}
        />
        <BuildControls
          addIngredient={this.addIngredient}
          price={this.state.price.toFixed(2)}
          purchaseble={this.state.purchaseble}
          order={this.showSummary}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
