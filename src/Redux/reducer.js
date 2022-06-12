import {ASC, DESC} from '../Components/filterProduct'
import {
  CLEAN_RESULT,
  FILTERED_PRODUCT,
  GET_CATEGORY,
  GET_PRODUCT,
  ORDER_PRODUCT,
  SEARCH_PRODUCT,
} from "./action";
const initialState = {
    products: [],
    results: [],
    filteredProduct: [],
    isFound: false,
    category: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
          products: action.payload,
          filteredProduct: action.payload,
        };
  
      case SEARCH_PRODUCT:
        if (action.payload.length !== 0) {
          return {
            ...state,
            results: action.payload,
            isFound: false,
          };
        } else {
          return {
            ...state,
            isFound: true,
          };
        }
  
      case CLEAN_RESULT:
        return {
          ...state,
          results: [],
        };
      case GET_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };
      case FILTERED_PRODUCT:
            const filter = state.filteredProduct;
            let productFiltered;
            if (action.payload === "all") {
              productFiltered = filter;
            } else {
              productFiltered=filter.filter((e) => {
                return e.categories.name.includes(action.payload);
              });
            }
            return {
              ...state,
              products: productFiltered,
            };
      case ORDER_PRODUCT:
          let orderProduct =state.products
              orderProduct= orderProduct.sort((a,b)=>{
                  if(a.name.toLowerCase() < b.name.toLowerCase()){
                      return action.payload === ASC ? -1 : 1
                  }if(a.name.toLowerCase() > b.name.toLowerCase()){
                      return action.payload===ASC ? 1 : -1
                  }
                  return 0
              })
          return {
              ...state,
              products: orderProduct
          }
      default:
        return state;
    }
  }
  