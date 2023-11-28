import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock'
import { getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList' 
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProductos]= useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error=> {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer