// add a new favorite
export const addFavorite = (id, img, title, description) => {
    return {
        type: 'ADD_BOOK',
        payload: { id: id, img: img, title: title, description: description }
    }
}

// remove a favotite
export const removeFavorite = (id) => {
    return {
        type: 'REMOVE_BOOK',
        payload: id
    }
}