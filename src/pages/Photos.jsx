import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"

function Photos() {
    const photosArray = useContext(Context)

    // let imagesWall = photosArray.map(image => (
    //     <Image />
    // ))


    return (
        <main className="photos">
            {/* {imagesWall} */}
        </main>
    )
}

export default Photos