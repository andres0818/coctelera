import { userData, userLogin } from './interfaces'

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
