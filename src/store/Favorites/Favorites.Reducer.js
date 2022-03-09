const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return state = [...state, action.payload]
        case 'REMOVE_BOOK':
            return state = state.filter((item) => (item.id !== action.payload ? item : null))
        default:
            return state
    }
}

export default favoritesReducer;