import { userData, userLogin, Cocktail } from './interfaces'

export const INITIAL_STATE: userData = {
    name: '',
    userName: '',
    email: '',
    password: '',
};

export const INITIAL_LOGIN: userLogin = {
    email: '',
    password: '',
};

export const INITIAL_COCKTAIL: Cocktail = {
    strDrinkThumb: '',
    strDrink: ''
}
