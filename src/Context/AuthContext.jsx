import { createContext, useState } from "react"

export let  AuthContext=createContext()
export function AuthContextProvider({children}){
    let [email,setEmail]=useState("")
    return <>
     <AuthContext.Provider value={{email,setEmail}}>
        {children}
     </AuthContext.Provider>
    </>
}