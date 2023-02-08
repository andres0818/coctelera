import { createContext, useEffect, useState } from "react";
import { auth, db } from "../api/firebase";


export const UserContext = createContext('')



const UserProvider = (props: any) => {
   return (
      <>
         <UserContext.Provider value={props.value}>
            {props.children}
         </UserContext.Provider>
      </>
   )
}

export default UserProvider