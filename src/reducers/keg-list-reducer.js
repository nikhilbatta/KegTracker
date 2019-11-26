export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        const { name, brand, price, alcContent, pintsAvailable, id } = action;
        console.log(pintsAvailable, "omg")
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
      default:
        return state;
    }
  }