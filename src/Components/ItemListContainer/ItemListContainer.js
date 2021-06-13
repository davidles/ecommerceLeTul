import React, { useState } from 'react'
import ProductsList from '../ProductsList/ProductsList'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

    const [ products, setProducts ] = useState([])

    const task = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ProductsList)
        }, 2000)
    })

    task.then(
        data => {
            setProducts(data)          
        }
    )

    return (
        <div>
            <h2>Catálogo de productos</h2>
            <ItemList items={ products }/>
        </div>
    )
}

export default ItemListContainer
