import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(
    {
        currentUser:'',
        auth: false,
    }
);

export const AuthContextProvider = ({ children }) => {
    const login = (user) => {
       
        setUser((user) => ({
            currentUser: user,
            auth: true,
        }));
    };

    const initState = {
        currentUser: undefined,
        auth: false
    }
    const [user, setUser] = useState(initState)

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
