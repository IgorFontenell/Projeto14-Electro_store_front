import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';


export default function Celulares(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:4000/categories-products");
            setProducts(data);
        }
        fetchData();
        return () => {
            //
        };
    }, []);

    return (
        <>
        <Header>
            <h1> Electro Store </h1>
        </Header>

        <Main>
            <ul className="products">
                {
                    products.map(product =>

                        <li key={product._id}>
                            <div className='product'>
                                <Link to={'/product' + product._id}>
                                    <img className='product-image' src={product.image} alt='product'></img>
                                </Link>

                                <div className='product-name'>
                                    <Link to={'/product' + product._id}>{product.name}</Link>
                                </div>

                                <div className='product-price'> R$ {product.price}</div>
                                <div className='product-brand'>{product.brand}</div>
                            </div>
                        </li>)
                }

            </ul>
        </Main>
        </>
    );
}


const Header = styled.div`
width: 100%;
background-color: #FF6E4E;
padding: 15px 15px; 
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0px;

h1{
    font-weight: 700;
    font-size: 30px;
    line-height: 32px;
    color: #010035;
}
`;

const Main = styled.div`

background-color: #010035;
height: 100vh;

    .products{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px 5px;
        margin-top: 80px;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 25px;
    }

        .product {
            width: 250px;
            height: 355px;
            box-shadow: 0px 0px 40px rgba(170, 182, 211, 0.1);
            border-radius: 10px;
            background-color: #FFFFFF;
        }

        .product-image{
            width: 250px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 15px;
        }

        .product-name{
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
            padding: 5px 15px;
            text-decoration: none;
            cursor: pointer;
        }

        .product-price{
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
            padding: 5px 15px;
        }

        .product-brand{
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            padding: 0px 15px;
        }
    
    `;
