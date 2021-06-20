import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemListContainer() {

    const { title } = useParams()

    const [ item, setItem ] = useState([])
    
    const getItems = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let info = ProductsList.find((x) => x.title === title)
            resolve(info)
        }, 2000)
    })

    getItems.then(
        data => {
            setItem(data)          
        }
    )


    return (
        <div>
            <ItemDetail item={ item }/>
        </div>
    )
}

export default ItemListContainer
