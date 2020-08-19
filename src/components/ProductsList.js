import React from "react"
import { DisplayProduct } from "./DisplayProduct"


export const ProductsList = (props) => {
    const SearchProduct = () =>
        props.products.filter((product) => product.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1)

    return SearchProduct().map((product,i) => {
        return (<DisplayProduct product={product
        } index={i}  key={i}  delete={props.deleteProduct} updateQuantity={props.updateQuantity} setProducts={props.setProducts} />
        )
    })
}