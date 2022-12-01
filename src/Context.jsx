import React from 'react'
const Context = React.createContext()


function ContextProvider({children}) {
    const [photosArray, setPhotosArray] = React.useState([])

    React.useEffect(() => {

        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then((res) => res.json())
        .then((data) => setPhotosArray(data))
    }, [])

    
    return (
        <Context.Provider value={{photosArray}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}