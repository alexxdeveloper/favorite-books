import { url } from "../utils/api.utils"

// carry out book search
export const searchBooks = async (value) => {
    try {
        const req = await fetch(`${url}+${value}&projection=lite`);
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