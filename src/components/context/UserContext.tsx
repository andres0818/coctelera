import React, { createContext,  useState } from 'react';

interface UserState {
   homeState: boolean;
}

interface UserDispatcher {
   setHomeState: (value: boolean) => void;
}

interface UserProps {
   children: React.ReactNode;
}

export const UserContext = createContext<UserState>({ homeState: true });
export const UserDispatcherContext = createContext<UserDispatcher>({ setHomeState: () => { } });

const UserProvider = (props: UserProps) => {
   const [homeState, setHomeState] = useState<boolean>(true);

   const state = { homeState };
   const dispatcher = { setHomeState };

   return (
      <UserDispatcherContext.Provider value={dispatcher}>
         <UserContext.Provider value={state}>
            {props.children}
         </UserContext.Provider>
      </UserDispatcherContext.Provider>
   );
};

export default UserProvider;