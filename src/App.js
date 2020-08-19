import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"
import { InputsForm } from "./components/InputsForm"
import { ProductsList } from './components/ProductsList'
import { SearchForm } from "./components/SearchForm"

export const App = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const addProduct = (productName, productQuantity) =>{
        setProducts([...products, { name: productName, quantity: productQuantity }])
        axios
        .post('http://localhost:3000/projects',{ name: productName, quantity: productQuantity })
    }

    useEffect(()=>{
        axios
          .get("http://localhost:3000/projects")
          .then((res) => setProducts(res.data))
      },[products])

    

    const deleteProduct = (id) => {
        if (window.confirm('Delete the item?')) {
            axios
            .delete(`http://localhost:3000/projects/${id}`)            
        }
    }


    const updateQuantity = (newValue,product) => {
        axios
        .patch(`http://localhost:3000/projects/${product.id}`,{quantity: newValue})
    }


    return (<Fragment>
        <InputsForm addProduct={addProduct} />
        <SearchForm setSearch={setSearch} />
        <table className="table">
            <thead>
                <th>Name</th>
                <th>Quantity</th>
                <th></th>
            </thead><tbody>
                <ProductsList products={products} search={search}  updateQuantity={updateQuantity}
                    deleteProduct={deleteProduct} setProducts={setProducts} />
            </tbody>
        </table>
    </Fragment>)
}


