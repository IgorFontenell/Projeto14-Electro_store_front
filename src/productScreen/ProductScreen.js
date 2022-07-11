import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

export default function ProductScreen() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:4000/xablau";
        const promise = axios.post(URL, { productId: productId });

        promise.then(response => {
            const { data } = response;
            setProducts(data);
        });

        promise.catch(err => {
            const message = err.response.statusText;
            alert(message);
        });
    }, []);

    return (
        <>
            <Header>
                <div className='marca'>
                    <h1> Electro Store </h1>
                </div>
                <div className='voltar'>
                    <Link to={'/main'}>Voltar</Link>
                </div>
            </Header>

            <Main>
                <ul className="details">
                    <li key={products._id}>
                        <div className='product'>
                            <img className='product-image' src={products.image} alt='product'></img>
                        </div>

                        <div className='info-product'>
                            <div className='product-name'>
                                {products.name}
                            </div>

                            <div className='product-price'> R$ {products.price}</div>
                            <div className='product-brand'>{products.brand}</div>

                            <div className='seletor'>
                                Quantidade: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div className='buttom-comprar'>
                                <Link to={'/carrinho'}> Adicionar ao carrinho </Link>
                            </div>

                        </div>
                    </li>
                </ul>
            </Main>
        </>
    )
}

const Header = styled.div`
width: 100%;
background-color: #E5E5E5;
padding-top: 15px; 
padding-bottom: 15px; 
display: flex;
justify-content: center;
align-items: center;
top: 0px;

.marca{
    font-weight: 700;
    font-size: 30px;
    line-height: 32px;
    color: #010035;
}

.voltar{
    font-weight: 200;
    font-size: 14px;
    line-height: 32px;
    color: #010035;
`;

const Main = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;

li{
    width: 100%;
    display:flex;
    flex-direction: center;
    align-items: center;
    flex-wrap: wrap;
}

.info-product{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 150px;
}

.product-image{
    margin-top: 50px;
    width: 350px;
    heigth: 500px;
}

.product-name{
    font-weight:600;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-top: 80px;
}

.product-price{
    font-weight:800;
    font-size: 28px;
    line-height: 20px;
    color: #000000;
    margin-top: 15px;
}

.product-brand{
    font-weight:600;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
    margin-top: 20px;
}

.seletor{
    font-weight:500;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
    margin-top: 20px;
}

.buttom-comprar{
    background-color: #FF6E4E;
    width: 250px;
    height: 58px;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-top: 30px;          
    cursor: pointer;

    a {
        color: #ffffff;
        text-decoration: none;
      }
}
    `;
