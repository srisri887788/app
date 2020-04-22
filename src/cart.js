import React, { useState } from 'react';
import './style.css'

const Child = (props) => {
   const [product, setProduct] = useState(props.product);
   const discountrange = {'5-10':5,'11-20':10,'21-30':20,'31-1000':40};
    const increment = () =>{
        let discper = 
        setProduct((prevstate)=>({...prevstate,
            qty : prevstate.qty + 1,
            discountper : getpercentage(prevstate.qty + 1) || 0
        }))

    }
    const decrement = () =>{
        setProduct((prevstate)=>({...prevstate,
            qty : prevstate.qty - 1 ,
            discountper : getpercentage(prevstate.qty - 1) || 0
        }))
    }
    const getpercentage = (qty) => {
      let disrange = Object.keys(discountrange);
      if(disrange && disrange.length > 0){
        for(let i =0;i<disrange.length;i++){
            let temprange = disrange[i].split('-');
            if(qty >=  temprange[0] && qty <= temprange[1]){
                return discountrange[disrange[i]]
            }
        }
      }
    }
    const calcTotal = () =>{
       let actualprice = (product.price * product.qty); 
       return (actualprice - ((product.discountper/100)*actualprice))
    }
 
    return (
            <div className="container">
                <div className="modal-content modal-lg">
                <div className="modal-body">
                    <table className="table table-image">
                    <thead>
                        <tr>
                            <th className="col txt-center"></th>
                            <th className="col txt-center">Product</th>
                            <th className="col txt-center">Price</th>
                            <th className="col txt-center">Quantity</th>
                            <th className="col txt-center">Discount %</th>
                            <th className="col txt-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td style={{"width": "25%"}}>
                            <img src={product.src} className="img-fluid img-thumbnail" alt="Sheep" />
                        </td>
                        <td className="txt-center">{product.name}</td>
                        <td className="txt-center">{product.price}</td>
                         <td className="qty txt-center"><button onClick={increment} className="btn btn-success"><i className="glyphicon glyphicon-plus"></i></button> <span className="badge">{product.qty}</span>
                          <button onClick={decrement} disabled={!product.qty} className="btn btn-success"><i className="glyphicon glyphicon-minus"></i></button></td>
                        <td className="txt-center"> <span className="badge">{product.discountper}</span></td>
                        <td className="txt-center">
                            <button className="btn btn-danger btn-sm" ><i className="glyphicon glyphicon-remove-sign"></i></button>
                        </td>
                        </tr>
                    </tbody>
                    </table> 
                    <div className="d-flex justify-content-end" style={{"textAlign":"right"}}>
                        <h2>Total: <span className="price text-success">{calcTotal()} Rs</span></h2>
                    </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-between">
                        <button type="button" className="btn btn-success">Checkout</button>
                </div>
                </div>
            
            </div>

    )
}

export default Child;