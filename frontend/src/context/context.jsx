import { createContext, useState } from "react";

export const ChangeMenu = createContext(null);

export const ChangeProvider= (props)=>{
    const [menu, setMenu] = useState("home")
    return(
        <ChangeMenu.Provider value={{menu, setMenu}}>{props.children}</ChangeMenu.Provider>
    )
}