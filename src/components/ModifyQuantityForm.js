import React, { useState } from "react"

export const ModifyQuantityForm = (props) => {
    const [quantity, setQuantity] = useState(props.product.quantity)

    return (
        <div className="popup"  >
            <div className="inner-popup d-flex justify-content-center align-items-center">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.handleUpdate(quantity)
                }} >  <div className="form-group mx-sm-3 ">
                        <label>{props.product.name}</label>
                        <input className="form-control" value={quantity} placeholder="New Quantity"
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <button className="btn btn-primary mx-2 float-right " type="button"
                        onClick={props.handleCancel} >Cancel</button>
                    <button className="btn btn-primary float-right "     >Ok</button>
                </form> </div></div>
    )
}
