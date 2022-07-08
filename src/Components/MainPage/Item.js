import styled from "styled-components";


export default function Item({ image, price, name }) {


    return(
        <ItemBox>
            <img src={image} alt="Items" width="135" />
            <h2>R$ {price}</h2>
            <span>{name}</span>
        </ItemBox>
    );
}
const ItemBox = styled.div`
    width: 145px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 1px lightgrey;
    margin: 10px 5px;
    font-family: 'Mark Pro', sans-serif;
    color: #010035;
    h2 {
        display: inline-block;
        margin: 5px 10px;     
        font-size: 18px;
        font-weight: bold;
    }
    span {
        display: inline-block;
        margin: 0px 10px;
        font-size: 12px;
    }
`