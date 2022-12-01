import React, {useContext} from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    const photosArray = useContext(Context)



    return (
        <main className="photos">
            {/* {imagesWall} */}
        </main>
    )
}

export default Photos