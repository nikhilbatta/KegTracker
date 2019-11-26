export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        const { name, brand, price, alcContent, pintsAvailable, id } = action;
       
        return [
          ...state,
          {
            name : name,
            brand : brand,
            price : price,
            alcContent : alcContent,
            pintsAvailable: pintsAvailable,
            id: id
          }
        ]
        case 'EDIT_POST':
            console.log(action.id)
        return state.map((post)=>post.id === action.id)
      default:
        return state;
    }
  }