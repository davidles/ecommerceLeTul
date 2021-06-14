import React, { useState, useEffect } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemListContainer() {

    const [ item, setItem ] = useState([])
    
    const getItems = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let info = ProductsList.find((x) => x.id === "2") //"2" iria id.. cierto?
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
