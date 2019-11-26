export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        const { name, brand, price, alcContent, pintsAvailable, id, editing } = action;
       
        return [
          ...state,
          {
            name : name,
            brand : brand,
            price : price,
            alcContent : alcContent,
            pintsAvailable: pintsAvailable,
            id: id,
            editing: editing
          }
        ]
        case 'EDIT_POST':
            if( state.map((post)=>post.id === action.id)){
                console.log("it found one")
                return [
                    ...state,
                    {
                    editing: !editing
                    }
                ]
            }
        
      default:
        return state;
    }
  }