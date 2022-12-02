import React from 'react'
const Context = React.createContext()


function ContextProvider({children}) {
    const [photosArray, setPhotosArray] = React.useState([])

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then((res) => res.json())
        .then((data) => setPhotosArray(data))
    }, [])


    function toggleFavorite(hovered){
        let newArray = photosArray.map(image => {
            if(image.id === hovered){
                return {...image, isFavorite: !image.isFavorite}
            } else {
                return image
            }
        })
        setPhotosArray(newArray)
    }
    
    return (
        <Context.Provider value={{photosArray, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}