import React, { createContext, useState} from "react";
import {useNavigation} from '@react-navigation/native'



export const AuthContext = createContext({})

 function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn (email, password){
        if(email!=='' && password!==''){
            setUser({
                email:email,
                status: "ATIVO"
            })

            navigation.navigate("HomeScreen")
        }
    }



    return(
        <AuthContext.Provider value={{nome: "Matheus Silva", signIn, user}}>
         {children}
        </AuthContext.Provider>
    )
 }

 export default AuthProvider;
