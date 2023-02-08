export interface userData {
    name: string;
    userName: string;
    email: string;
    password: string;
}

export interface UserState {
    homeState: boolean;
}

export interface UserDispatcher {
    setHomeState: (value: boolean) => void;
    createUser: (user: { email: string; password: string, userName: string, name: string }) => void;
    loginUser: (user: { email: string; password: string, userName: string, name: string }) => void;
}

export interface UserProps {
    children: React.ReactNode;
}