export default (state = [], action) => {
    console.log(action.type)
    console.log(name);
    switch (action.type) {
    case 'ADD_TICKET':
      const { names, brand, price, alcContent, pintsAvailable } = action;
        console.log("it got here", names)
    //   let newState = Object.assign({}, state, {
    //     [id]: {
    //       names: names,
    //       location: location,
    //       issue: issue,
    //       timeOpen: timeOpen,
    //       id: id
    //     }
    //   });
      return action;
    default:
      return state;
    }
  };