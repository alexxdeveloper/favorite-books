import { url } from "../utils/api.utils"

// carry out book search
export const searchBooks = async (value, index) => {
    try {
        const req = await fetch(`${url}+${value}&projection=lite&maxResults=20&startIndex=${index}`);
        const res = req.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const reduceText = (value) => {
    return value.length > 225
        ? value.slice(0, 225) + '...'
        : value
}