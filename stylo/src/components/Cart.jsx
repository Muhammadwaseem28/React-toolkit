import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { remove } from "../faetures/cart/CartSlice";

const Cart = () => {
    const products=useSelector(state=>state.cart)
     
    const dispatch=useDispatch()
    const removeFromCart=(id)=>{
           dispatch(remove(id))
    }
    const cards=products.map(product=>(
        <div className="col-md-6" style={{marginBottom:'20px'}}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:'100px' ,height:'150px'}} />
                </div>

      <Card.Body>
        <Card.Title className="text-center">{product.title}</Card.Title>
        <Card.Text className="text-center">{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer  className='text-center' style={{backgroundColor:'white'}}>
        <Button variant="danger" onClick={()=>removeFromCart(product.id)}  >Remove Item</Button>
      </Card.Footer>
    </Card>

        </div>
    ))
  return (
    <>
    <div className="row">
        {cards}
    </div>
  </>
  )
};

export default Cart;
