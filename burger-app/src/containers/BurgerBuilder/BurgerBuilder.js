import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';





class BurgerBuilder extends Component{
    state = {
        purchasing: false,
    }

    componentDidMount(){
        this.props.onInitIngredients();
    }

    updatePurchaseState (updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
            .map(igKey => {
                return updatedIngredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        return sum > 0;
    }




    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
       this.props.onInitPurchase();
       this.props.history.push('/checkout');
    }

    render (){
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = !this.props.error ? <Spinner /> : <p>There was an error</p>;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    price={this.props.price}
                    ordered={this.purchaseHandler}/>
                </Aux>
            );
            orderSummary =  <OrderSummary 
                ingredients = {this.props.ings} 
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.addIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));