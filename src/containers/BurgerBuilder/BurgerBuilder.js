
import React,{Component} from 'react' 
import Auxillary from'../../hoc/Auxillary'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE=
{
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7

}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        purchasable:false,
        totalPrice:4,
        purchasing:false
    }
    updatePurchaseState(ingredients)
{

    const sum=Object.keys(ingredients).map(cur=>{
        return ingredients[cur]
    }).reduce((sum,el)=>{
        return sum+el;
    },0)

    this.setState({
        purchasable:sum>0
    })
}
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const newState={
            ...this.state.ingredients
        }
        newState[type]=updatedCount;
        const priceAdditon=INGREDIENTS_PRICE[type]
        const newPrice=this.state.totalPrice+priceAdditon
        this.setState({totalPrice:newPrice,ingredients:newState})
       this.updatePurchaseState(newState)
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount===0){
        alert("NO ELEMENT");
        return;
      }
        const updatedCount=oldCount-1;
        const newState={
            ...this.state.ingredients
        }
        newState[type]=updatedCount;
        const priceAdditon=INGREDIENTS_PRICE[type]
        const newPrice=this.state.totalPrice-priceAdditon
        this.setState({totalPrice:newPrice,ingredients:newState})
        this.updatePurchaseState(newState)
    }
purchaseHandler=()=>{
this.setState({
    purchasing:true
})
}
purchaseCancelHandler=()=>{
    this.setState({purchasing:false})
}
purchaseContinueHandler=()=>{
    alert('You Continue')
}
render()
{const disableInfo={
    ...this.state.ingredients

}
for(let key in disableInfo)
{
    disableInfo[key]=disableInfo[key]<=0
}
    return (
        <Auxillary>
            <Modal modalClosed={this.purchaseCancelHandler}show={this.state.purchasing}><OrderSummary 
            purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice}ingredients={this.state.ingredients}/></Modal>
           <div><Burger ingredients={this.state.ingredients}/></div>
           <div><BuildControls ordered={this.purchaseHandler} purchasable={this.state.purchasable} price={this.state.totalPrice} disabled={disableInfo} ingredientRemoved={this.removeIngredientHandler} ingredientAdded={this.addIngredientHandler}/></div>
        </Auxillary>
    );
}
}
export default BurgerBuilder