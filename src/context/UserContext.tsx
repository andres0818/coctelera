import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { auth, db, } from '../components/api/firebase';
import { Cocktail, UserDispatcher, UserProps, UserState } from '../types';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../components/api/api';
import { OrdersTables, totalBill, totalDailySale } from '../types/interfaces';



export const UserContext = createContext<UserState>({
   homeState: true,
   occupiedTables: [],
   nameTable: '',
   dataCocktails: [],
   orders: [],
   totalDay: [],
   dailySale: [],
   newCocktail: [],
   statusLogin: null,
});
export const UserDispatcherContext = createContext<UserDispatcher>({
   setHomeState: () => { },
   createUser: () => { },
   loginUser: () => { },
   navigate: () => { },
   setOccupiedTables: () => { },
   setNameTable: () => { },
   setOrders: () => { },
   setTotalDay: () => { },
   setDailySale: () => { },
});




const UserProvider = (props: UserProps) => {

   const [homeState, setHomeState] = useState<boolean>(true);
   const [dataUser, setDataUser] = useState<any>([]);
   const [occupiedTables, setOccupiedTables] = useState<number[]>([])
   const [nameTable, setNameTable] = useState<string>('')
   const [dataCocktails, setDataCocktails] = useState<Cocktail[]>([]);
   const [orders, setOrders] = useState<OrdersTables[]>([])
   const [totalDay, setTotalDay] = useState<totalBill[]>([])
   const [dailySale, setDailySale] = useState<totalDailySale[]>([])
   const [statusLogin, setStautsLogin] = useState<any>(null)
   const [newCocktail, setNewCocktail] = useState<any[]>([])

   const navigate = useNavigate()

   useEffect(
      () => {
         getDataApi()
         data();
         loginStatus();
         newDataCocktail();
         adminCocktailsdata()
      },
      []
   )

   useEffect(
      () => newDataCocktail(),
      [newCocktail]
   )

   const adminCocktailsdata = () => {
      onSnapshot(collection(db, "cocktails"), (snapshot) => {
         setNewCocktail(snapshot.docs.map((doc) => { return { ...doc.data(), id:doc.id } }))
      })
   }
   
   const newDataCocktail = () => {
      setDataCocktails(
         dataCocktails.concat(newCocktail)
      )
   }

   const loginStatus = async () => {
      try {
         await new Promise(() => {
            auth.onAuthStateChanged((log) => {
               setStautsLogin(log)
            });
         });
      } catch (error) {
         console.log(error);
      }
      return statusLogin
   };

   const getDataApi = async () => {
      const newData = await getApi()
      setDataCocktails(newData)
   }


   const data = () => {
      onSnapshot(collection(db, "users"), (snapshot) => {
         setDataUser(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } }));
      });
   };



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
         .catch((err: any) => alert(err.message));
   };


   const loginUser = (user: { email: string; password: string }) => {
      signInWithEmailAndPassword(auth, user.email, user.password)
         .then(() => {
            if (user.email === "admin@admin.adm") {
               navigate('/admin')
            }
            else {
               navigate('/cocktails')
            }
         })
         .catch((err: any) => alert(err.message));
   };




   const state = { homeState, occupiedTables, nameTable, dataCocktails, orders, totalDay, dailySale, statusLogin, newCocktail };
   const dispatcher = { setHomeState, createUser, loginUser, navigate, setOccupiedTables, setNameTable, setOrders, setTotalDay, setDailySale };

   return (
      <UserDispatcherContext.Provider value={dispatcher}>
         <UserContext.Provider value={state}>
            {props.children}
         </UserContext.Provider>
      </UserDispatcherContext.Provider>
   );
};

export default UserProvider;