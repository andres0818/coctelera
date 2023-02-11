import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { auth, db, } from '../components/api/firebase';
import { Cocktail, UserDispatcher, UserProps, UserState } from '../types';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../components/api/api';
import { OrdersTables, totalBill } from '../types/interfaces';



export const UserContext = createContext<UserState>({
   homeState: true,
   occupiedTables: [],
   nameTable: '',
   dataCocktails: [],
   orders: [],
   totalDay: []
});
export const UserDispatcherContext = createContext<UserDispatcher>({
   setHomeState: () => { },
   createUser: () => { },
   loginUser: () => { },
   navigate: () => { },
   setOccupiedTables: () => { },
   setNameTable: () => { },
   setOrders: () => { },
   setTotalDay: () => { }
});




const UserProvider = (props: UserProps) => {

   const [homeState, setHomeState] = useState<boolean>(true);
   const [dataUser, setDataUser] = useState<any>([]);
   const [occupiedTables, setOccupiedTables] = useState<number[]>([])
   const [nameTable, setNameTable] = useState<string>('')
   const [dataCocktails, setDataCocktails] = useState<Cocktail[]>([]);
   const [orders, setOrders] = useState<OrdersTables[]>([])
   const [totalDay, setTotalDay] = useState<totalBill[]>([])

   const navigate = useNavigate()


   const getDataApi = async () => {
      const newData = await getApi()
      setDataCocktails(newData)
   }

   useEffect(() => {
      getDataApi()
   }, [])



   const data = () => {
      onSnapshot(collection(db, "users"), (snapshot) => {
         setDataUser(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } }));
      });
   };

   useEffect(
      () => {
         data();
      },
      []
   )


   const createUser = (user: { email: string; password: string, userName: string, name: string }) => {
      createUserWithEmailAndPassword(auth, user.email, user.password)
         .then((result) => {

            if (!dataUser.find((e: any) => e.email === result.user.email)) {
               addDoc(collection(db, "users"), {
                  email: result.user.email,
                  user: user.name,
                  name: user.userName
               });
            }
            setHomeState(false);
         })
         .catch((err: any) => console.log(err.message));
   };


   const loginUser = (user: { email: string; password: string }) => {
      signInWithEmailAndPassword(auth, user.email, user.password)
         .then(() => {

            navigate('/cocktails')
         })
         .catch((err: any) => console.log(err));
   };


   const state = { homeState, occupiedTables, nameTable, dataCocktails, orders, totalDay };
   const dispatcher = { setHomeState, createUser, loginUser, navigate, setOccupiedTables, setNameTable, setOrders, setTotalDay };

   return (
      <UserDispatcherContext.Provider value={dispatcher}>
         <UserContext.Provider value={state}>
            {props.children}
         </UserContext.Provider>
      </UserDispatcherContext.Provider>
   );
};

export default UserProvider;