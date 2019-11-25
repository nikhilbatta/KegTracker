export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        const { name, brand, price, alcContent, id } = action;
        return [
          ...state,
          {
            name : name,
            brand : brand,
            price : price,
            alcContent : alcContent,
            id: id
          }
        ]
      default:
        return state;
    }
  }