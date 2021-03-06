import React from 'react'
import PropsType from 'prop-types'
import { useStaticQuery,  graphql, Link } from 'gatsby'
import styled from 'styled-components'

/*

TODO: AddToCartButton recieves:
 - 'id' (the main product id)
 - variants.id
 - quantity
 and adds them to the cart data
*/

const AddToCartButton = styled.button`
  // width: 150px;
  // width: 75px;
  display: inline-block;
  height: 40px;
  border-radius: 12px;
  background-color: rgba(76, 116, 72, 1);
  background-image: radial-gradient( circle, rgba(76, 116, 72, 0.6), 50%, rgba(76, 116, 72, 0.9));
  border: none;
  margin:8px 4px 0px 4px;
  &:hover {
    background-color: white;
  }


  @media only screen and (min-width: 800px) {
    // width: 170px;
    // width: 100px;
    // height: 50px;
    // display: inline-block;
    // margin-top: 0;
  }
`

const Text = styled.span`
  color: #fff;
  font-family: 'objektiv-mk1', 'sans-serif';
  font-size: 16px;
  letter-spacing: 2px;
  padding: 7px;
`

export default (props) => (

  <AddToCartButton
    className ="AddToCartButton"
    onClick={ props.handleAddToCart}
  >
    <Text>add to bag</Text>
  </AddToCartButton>
)
