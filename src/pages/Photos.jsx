import React, {useContext} from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    const {photosArray} = useContext(Context)
    
    let imagesWall = photosArray.map((image, i) => {

        console.log(i, getClass(i))

        return(
            <Image key={image.id} img={image}
            className={getClass(i)}
            />
        )
    })


    return (
        <main className="photos">
            {imagesWall}
        </main>
    )
}

export default Photos