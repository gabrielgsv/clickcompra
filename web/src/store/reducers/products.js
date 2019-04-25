// reducer

export default function categories(state = [], action){
  switch(action.type){
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: action.data.id,
          name_categorie: action.data.name_categorie,
          name_product: action.data.name_product,
          imageBase64: action.data.imageBase64,
          description: action.data.description,
          value: action.data.value,
          amount: action.data.amount,
        }
      ]
      case 'GET_ALL_PRODUCT':
        return action.data
      case 'DELETE_PRODUCT':
        return state.filter(product => product.id !== action.id)
      default:
       return state
  }
}