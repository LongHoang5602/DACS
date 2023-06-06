import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(
    {
        currentUser: "",
        setUser: () => {}
    }
);

export const AuthContextProvider = ({ children }) => {

    // console.log(localStorage);

    // const [currentUser, setCurrentUser] = useState(
    //   // JSON.parse(localStorage.getItem("user")||"") || null
    //   null
    // );
    
    // const login = ({profile}) => {
    //     //TO DO
    //     // setCurrentUser({
    //     //     id: 1,
    //     //     name: "long tran",
    //     //     profilePic:
    //     //         "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     // });
    //     setCurrentUser(profile)
    // };
    const setUser = (user) => {
        console.log(user)
        // setState2({...state2, currentUser: user})
        
        setTimeout(()=>{
            setState2(...this.state2,{
                currentUser: "usernsfkdsak ",
                    setUser: setUser
                  } )
        },1000)
      }
    
    const initState = {
    currentUser: "asd",
        setUser: setUser
      } 
      const [state2, setState2] = useState(initState)

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(currentUser));
    // }, [currentUser]);

    return (
        // <AuthContext.Provider value={{ currentUser, login }}>
        <AuthContext.Provider value={state2}>
            {children}
        </AuthContext.Provider>
    );
};
