import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball"])

     const clickBoton = () => {
         setCategories(["Juan Pablo"])
     }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <button onClick={clickBoton}>Agregar categoria</button>

            <ol>
            {
                    categories.map( category => ( 
                        <GifGrid
                            key={ category }
                            category ={ category }
                        />
                    ))
                }
            </ol>


        </>
    )
}

