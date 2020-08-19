import React, { Fragment, useState } from "react"
import { validateName, validateQuantity } from "../utils"

export const InputsForm = (props) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateName(name) === false) {
            window.alert("Please enter Product Name");
        }
        else if (validateQuantity(quantity) === false) {
            window.alert("Product Quantity is not valid");
        }
        else {
            props.addProduct(name, quantity)
            setName('');
            setQuantity('')
        }
    }

    return (<Fragment>
        <form onSubmit={handleSubmit}>  <div className="container py-3">
            <div className="form-group">
                <label>Product Name:</label>
                <input className="form-control " value={name} onChange={(e) => setName(e.target.value)} /></div>
            <div className="form-group">
                <label>Product Quantity:</label>
                <input className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <small className="form-text text-muted">Must be number</small>
                <button className="btn btn-primary my-2 float-right" >Add Product</button></div>
            <div className="clearfix"></div>
        </div></form>
    </Fragment>)
}

