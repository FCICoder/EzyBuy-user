import { createContext, useEffect, useState } from 'react'

export let LoginContext = createContext();

export default function LoginContextProvider(props) {


    let [customerToken, setCustomerToken] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('customerToken')) {
            setCustomerToken(localStorage.getItem('customerToken'))
        } else {
            setCustomerToken(null)
        }
    }, [])


    return <LoginContext.Provider value={{ customerToken, setCustomerToken }}>
        {props.children}
    </LoginContext.Provider>
} 