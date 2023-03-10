import { Dispatch, SetStateAction } from "react";

export interface userData {
    name: string;
    userName: string;
    email: string;
    password: string;
}

export interface UserProps {
    children: React.ReactNode;
}

export interface userLogin {
    email: string;
    password: string;
}
export interface Cocktail {
    strDrinkThumb: string;
    strDrink: string;
    idDrink: number
    id?: any;
}


export interface OrdersTables {
    id: string
    name: string;
    count: number;
    photo: string;
    table: string;
    price: number;
}

export interface UserState {
    homeState: boolean;
    occupiedTables: number[];
    nameTable: string;
    dataCocktails: Cocktail[];
    orders: OrdersTables[];
    totalDay: totalBill[];
    dailySale:totalDailySale[];
    newCocktail:Cocktail[];
    statusLogin: any;

}

export interface UserDispatcher {
    setHomeState: (value: boolean) => void;
    createUser: (user: { email: string; password: string, userName: string, name: string }) => void;
    loginUser: (user: { email: string; password: string }) => void;
    navigate: (path: string) => void;
    setOccupiedTables: (value: number[]) => void;
    setNameTable: (value: string) => void;
    setOrders: (value: React.SetStateAction<OrdersTables[]>) => void;
    setTotalDay: Dispatch<SetStateAction<totalBill[]>>
    setDailySale: Dispatch<SetStateAction<totalDailySale[]>>
}

export interface totalBill {
    table: string;
    total: number;
}


export interface totalDailySale{
    table: string;
    total: number;
}

