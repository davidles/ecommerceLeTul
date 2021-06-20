import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

function ItemListContainer() {

    const {category} = useParams()

    const[prodList, setProdList] = useState([]) 

       useEffect(() => {
            obtenerDatos()         
    }, [category]) 
    
    const obtenerDatos =  () => {
        if(!category){
            setProdList(ProductsList)
        }else{            
            let getCategory = ProductsList.filter(x => x.category === category)            
            setProdList(getCategory)
        }
        
    }     
   

    return (
        <div>
            <h2 className="title">Catálogo de {category || "Productos"}</h2>
            <ItemList items={ prodList }/>
        </div>
    )
}

export default ItemListContainer
