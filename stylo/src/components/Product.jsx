import React from "react";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch ,useSelector } from "react-redux";
import { add } from "../faetures/cart/CartSlice";
import { fetchProducts } from "../faetures/ProductSlice";

const Product = () => {
      const {products}=useSelector(state=>state.products)
         const dispatch=useDispatch()
    // const[products,getProducts]=useState([])
    useEffect(()=>{

        dispatch(fetchProducts())
    //   fetch('https://fakestoreapi.com/products')
    //   .then(data=>data.json())
    //   .then(result=>getProducts(result))  
    },[])

    const addToCart=(product)=>{
      dispatch(add(product))
    }

    const cards=products.map(product=>(
        <div className="col-md-3" style={{marginBottom:'20px'}}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:'100px' ,height:'150px'}} />
                </div>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
      </Card.Footer>
    </Card>

        </div>
    ))
  return( <>
  <h1>Product dashBoard</h1>
  <div className="row">
      {cards}
  </div>
  </>
  )

};

export default Product;
