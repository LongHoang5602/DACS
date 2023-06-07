import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(
    {
        currentUser: {},
        auth: false,
    }
);

export const AuthContextProvider = ({ children }) => {
    const login = (data) => {
        console.log("set currentUser: ", data);
       
        setUser({
            currentUser: {...data},
            auth: true,
        });
        //console.log("auth", user.auth);
    };

    const initState = {
        currentUser: {},
        auth: false
    }
    const [user, setUser] = useState(initState)



    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user.currentUser));
    }, [user.currentUser]);

    
    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(currentUser));
    // }, [currentUser]);

    return (
        // <AuthContext.Provider value={{ currentUser, login }}>
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};
