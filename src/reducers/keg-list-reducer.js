import { v4 } from 'uuid';

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
            id: v4(),
            editing: editing
          }
        ]
        
        case 'EDIT_POST':
            // wanted to implement in this way of doing it but the ? mark was giving me syntax errors, come back to this later.
            console.log(state)
            console.log(state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post))
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)

            // if( state.map((post)=>post.id === action.id)){
            //     console.log("true wa")
            //    console.log(...state)
            //     return [
            //         ...state[action.id],
            //         {
            //         editing: !editing,
            //         name: name
            //         }
            //     ]
            // }
      default:
        return state;
    }
  }