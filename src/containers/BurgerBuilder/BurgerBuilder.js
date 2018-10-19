import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary.js";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/buildControls/buildControls";
import Modal from "../../components/UI/Modal/Modal.js";
import axios from "../../axios-order";
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
      loading: false
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
  handlePurchase = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price.toFixed(2),
      customer: {
        name: "Wojciech Kalebasiak",
        address: {
          street: "Wichrowe Wzgorze",
          zipCode: "61675",
          email: "w.kalebasiak@puszkin.eu"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false, showSummary: false });
      })
      .catch(err => {
        this.setState({ loading: false, showSummary: false });
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
            purchase={this.handlePurchase}
            loading={this.state.loading}
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
