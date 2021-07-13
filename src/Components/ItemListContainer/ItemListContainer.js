import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
import ItemList from '../ItemList/ItemList'
import { getFirestore } from "../../factory/index";
import './ItemListContainer.css'

function ItemListContainer() {

    const { category } = useParams();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos =  () => {
      if(!category){
        const db = getFirestore();
        const itemCollection = db.collection('items');
        //  const categoryId = itemCollection.where('category', '==', category)
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
            <ItemList category={ categories }/>
        </div>
    )
}

export default ItemListContainer
