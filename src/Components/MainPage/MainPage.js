import { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "./Category";
import Item from "./Item";
import axios from "axios";

export default function MainPage() {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const request = axios.get("http://localhost:4000/items");
        request.then(response => {
            setItems(response.data)
        });
    }, []);

    function RenderItems() {
        if(items === []) {
            return (<></>);
        };

        let itemsRender=items.map(object => <Item image={object.image} name={object.name} price={object.price} />)
        return(itemsRender);
    }


    return(
        <Main>
            <Header>
                <div>
                    <h1>Categorias</h1>
                    <span>mostrar todas</span>
                </div>
                <Classes>
                    <Category ion="phone-portrait-outline" categoria="Celulares"/>
                    <Category ion="laptop-outline" categoria="Laptops"/>
                    <Category ion="game-controller-outline" categoria="Jogos"/>
                    <Category ion="headset-outline" categoria="Fones"/>
                    <Category ion="telescope-outline" categoria="Telescópio"/>
                    <Category ion="watch-outline" categoria="SmartWatch"/>
                    <Category ion="print-outline" categoria="Impressoras"/>
                </Classes>
            </Header>
            <Sales>
                 <div>
                    <h1>Promoções</h1>
                    <span>mostrar mais</span>
                </div>
                <img src="https://i.ytimg.com/vi/BYEvWjAIi3U/maxresdefault.jpg" alt="Promoção" width="100%"/>
            </Sales>
            <Items>
                <div>
                    <h1>Mais Vendidos</h1>
                    <h4>mostrar mais</h4>
                </div>
                <div>
                     <RenderItems />
                </div>
            </Items>
        
        </Main>
    );
};
const Main = styled.div`
    width:100%;
    min-height: 100vh;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px 15px;
`;
const Header = styled.div`
    width: 100%;
    font-family: 'Mark Pro', sans-serif;
    
    
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        > span {
        font-size: 12px;
        color: #FF6E4E;
        }
    }
    h1 {
        font-weight: bold;
        font-size: 20px;
        color: #010035;
    }
`
const Classes = styled.div`
    display: flex;
    padding-left: 10px;
    align-items: center;
    overflow-x: scroll;
`
const Sales = styled.div`
    margin: 10px 0px;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        > span {
        font-size: 12px;
        color: #FF6E4E;
        }
    }
    h1 {
        font-weight: bold;
        font-size: 20px;
        color: #010035;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 15px;
    }
`;
const Items = styled.div`
     > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        h4 {
        font-size: 12px;
        color: #FF6E4E;
        }
    }
    h1 {
        font-weight: bold;
        font-size: 20px;
    }
    > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
`;