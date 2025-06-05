import React from 'react'
import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';




export default function Cart({cartItems, add,remove}) {    
  const totalPrice = cartItems.reduce(
      (sum, product) => sum + product.price*product.number, 0
    )

const buy = ()=>{
  alert('спс🍔🍔🍔🍔')
}


  return (

    <Alert variant="info">
    <Alert.Heading>корзина</Alert.Heading>
    {cartItems.length ===  0 && <p>корзина порожня</p>}
    <table width="100%">
    {cartItems.map(product=>
      <tr key={product.id}>
        <td width="25%">{product.name}</td>
        <td width="25%">{product.number}
        <Button onClick={()=> add(product)} variant="success">+</Button>
        <Button onClick={()=> remove(product)} variant="danger">-</Button>
        </td>
        <td width="25%">{product.price}€</td>
        <td width="25%">{product.price*product.number}€</td>
      </tr>
  )}
    </table>
   
    <hr/>
    <p className='mb-01'>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      сума до сплати{totalPrice}€
    </p>


  <Button variant="primary" onClick={buy}>
      kupi
    </Button>
  



    </Alert>
  )
}

