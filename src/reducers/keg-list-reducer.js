import {
    v4
} from 'uuid';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_KEG':
            const {
                name, brand, price, alcContent, pintsAvailable, id, editing
            } = action;

            return [
                ...state,
                {
                    name: name,
                    brand: brand,
                    price: price,
                    alcContent: alcContent,
                    pintsAvailable: pintsAvailable,
                    id: v4(),
                    editing: editing
                }
            ]

        case 'EDIT_KEG':
            // wanted to implement in this way of doing it but the ? mark was giving me syntax errors, come back to this later.
            return state.map((keg) => keg.id === action.id ? {
                ...keg,
                editing: !keg.editing
            } : keg)
        case 'UPDATE':
            return state.map((keg) => {
                if (keg.id === action.id) {
                    return {
                        ...keg,
                        name: action.data.editedName,
                        brand: action.data.editedBrand,
                        price: action.data.editedPrice,
                        alcContent: action.data.editedAlcContent,
                        editing: !keg.editing
                    }
                } else return keg;
            })
        case 'DELETE_KEG':
            return state.filter((keg) => keg.id !== action.id);
        default:
            return state;
    }
}