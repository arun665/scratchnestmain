export const initialState = {
    basket: [],
    user: null,
    categoryt: [],
  };
  
  export const getBasketTotal = (basket: any[]) =>
    basket?.reduce((amount, items) => items.price + amount, 0);
  
  const reducer = (state: { basket: any[]; }, action: { type: any; user: any; item: any; id: any; }) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_CATEGORY":
        return {
          ...state,
          item: action.item,
        };
  
      case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_FROM_BASKET":
        //find the product in the basket
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        //Copied basket
        let newBasket = [...state.basket];
        //ccondition if exists freak out that product
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`No such item with id: ${action.id} exists `);
        }
  
        //since we are splicing so returning basket as new basket
  
        return { ...state, basket: newBasket };
  
      default:
        return state;
    }
  };
  
  export default reducer;