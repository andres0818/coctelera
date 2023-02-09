export interface userData {
    name: string;
    userName: string;
    email: string;
    password: string;
}

export interface UserState {
    homeState: boolean;
    occupiedTables:number[]
}

export interface UserDispatcher {
    setHomeState: (value: boolean) => void;
    createUser: (user: { email: string; password: string, userName: string, name: string }) => void;
    loginUser: (user: { email: string; password: string}) => void;
    navigate: (path: string) => void;
    setOccupiedTables:(value:number[])=>void
}

export interface UserProps {
    children: React.ReactNode;
}

export interface userLogin {
    email: string;
    password: string;
}