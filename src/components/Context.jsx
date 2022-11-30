import React from 'react'
const Context = React.createContext()


function ContextProvider(props) {
    
    const theme = "Gaia"
    
    return (
        <Context.Provider value={{theme}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}