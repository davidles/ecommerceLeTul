import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
import ItemDetail from '../ItemDetail/ItemDetail'
import CartContext from '../../Context/CartContext'

function ItemDetailContainer() {

    const { product, setProduct } = useContext(CartContext)

    const { id } = useParams()

 

    useEffect(() => {
        setTimeout(() => {
          let item = ProductsList.find((x) => x.id === id);
          setProduct(item);
        }, 1000);
      }, []);

    return (
        <div>
            <div className="Cards-container">
             <ItemDetail product={product}></ItemDetail>
            </div>
        </div>
    )
}

export default ItemDetailContainer

/***
 *     const getItems = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let info = ProductsList.find((x) => x.id === 1)
            resolve( info )
        }, 2000)
    })

    getItems.then(
        data => {
            setProduct(data)
            console.log(product)          
        }
    )
 */