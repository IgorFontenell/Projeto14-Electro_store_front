import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';


export default function Telescópio(props, categoria) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:4000/categories-products-Telescopio");

            const product = products.filter(x => x.category === "Telescópio");

            if(product){
                setProducts(data);  
            }           
        }
        fetchData();
        return () => {
            //
        };
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

                                <div className='buttom-comprar'>
                                    <Link to={'/product/' + product._id}>Comprar</Link>
                                </div>
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
background-color: #E5E5E5;
padding: 15px 80px; 
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0px;

.marca{
    font-weight: 700;
    font-size: 30px;
    line-height: 32px;
    color: #010035;
}

.voltar{
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    width: 50px;
    height: 20px;
    background-color: #FF6E4E;
    border-radius: 12px; 
    display:flex;
    justify-content: center;
    align-items: center; 
    
    a{
        cursor: pointer;
        text-decoration: none;
        color: #FFFFFF;

    }
}
`;

const Main = styled.div`

background-color: #FFFFFF;
height: 100%;

    .products{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px 5px;
        margin-top: 60px;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 25px;
    }

        .product {
            width: 250px;
            height: 430px;
            box-shadow: 0px 0px 40px rgba(170, 182, 211, 0.4);
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

            a {
                color: #000000;
                text-decoration: none;
              }
        }

        .product-price{
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
            padding: 5px 15px;
        }

        .product-brand{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            padding: 0px 15px;
        }

        .buttom-comprar{
            background-color: #FF6E4E;
            width: 180px;
            height: 48px;
            font-weight: 600;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            margin: 12px 30px;          
            cursor: pointer;

            a {
                color: #ffffff;
                text-decoration: none;
              }
        }
        
    
    `;
