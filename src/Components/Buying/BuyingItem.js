import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";


export default function BuyingItem({ name, price, image, quantity, UpdateTotal, UpdateBuyingItems }) {
    
    
    function Minus() {
        
        if(quantity > 0) {
            const newQuantity = String(Number(quantity) + 1);
            let request = axios.put("http://localhost:4000/update", {
                name,
                image,
                price,
                quantity,
                newQuantity: quantity - 1
            });
            request.then(UpdateTotal);
            request.then(UpdateBuyingItems);
        }
        
    }
    function Plus() {
    const newQuantity = String(Number(quantity) + 1);
    let request = axios.put("http://localhost:4000/update", {
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        newQuantity: newQuantity
    });
    request.then(UpdateTotal);
    request.then(UpdateBuyingItems);
        
    }
    
    
    return (
        <Item>
            <img src={image} alt="Item no carrinho" width="88" height="88" />
            <Center>
                <span>{name}</span>
                <span>{price}</span>
            </Center>
            <Button>
                <ion-icon name="remove-outline" onClick={Minus}></ion-icon>
                <span>{quantity}</span>
                <ion-icon name="add-outline" onClick={Plus}></ion-icon>
            </Button>
        </Item>

    );
}
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    img {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        margin-right: 20px;
    }

`;
const Center = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #FFFFFF;
    font-family: 'Mark Pro', sans-serif;
    font-weight: bold;
    font-size: 20px;
    span:nth-child(2) {
        color: #FF6E4E;
    }
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #282843;
    min-width: 26px;
    height: 68px;
    border-radius: 26px;
    color: #FFFFFF;
    font-family: 'Mark Pro', sans-serif;
    font-weight: bold;

    ion-icon {
        font-size: 18px;
        color: #FFFFFF;
    }
    span {
        font-size: 20px;
    }
`;