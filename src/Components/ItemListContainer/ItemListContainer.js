import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
import ItemList from '../ItemList/ItemList'
import { getFirestore } from "../../factory/index";
import './ItemListContainer.css'
import CartContext from '../../Context/CartContext';


function ItemListContainer() {

    const { category } = useParams();

    const { categories, setCategories } = useContext(CartContext)
    
    const [loading, setLoading] = useState(true);

    const obtenerDatos =  () => {
      if(!category){
        const db = getFirestore();
        const itemCollection = db.collection('items');
         itemCollection
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              setLoading(false);
              return;
            }
            setCategories(querySnapshot.docs.map(doc => doc.data()));
            setLoading(false);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          });
      }else{            
        const db = getFirestore();
        const itemCollection = db.collection('items');
          const categoryId = itemCollection.where('category', '==', category)
          categoryId
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              setLoading(false);
              return;
            }
            setCategories(querySnapshot.docs.map(doc => doc.data()));
            console.log(categories);
            setLoading(false);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          });
      }
      
  } 

    useEffect(() => {
      
      obtenerDatos()

      
  }, []);

    return (
        <div>
            <h2 className="title">Catálogo de {category || "Productos"}</h2>
            <ItemList categories={ categories }/>
        </div>
    )
}

export default ItemListContainer
