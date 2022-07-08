import styled from "styled-components";
import BuyingItem from "./BuyingItem";


export default function Cart() {
    return(
        <Page>
        <Top>
            <TopLeft>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </TopLeft>
            <TopRigth>
                <span>Endereço</span>
                <div>
                    <ion-icon name="location-outline"></ion-icon>
                </div>
            </TopRigth>
        </Top>
        <span>My Cart</span>
        <ShopCart>
            <Items>
                <BuyingItem />
                
            </Items>
            <Bill>
                <Total>
                    <div>
                        <span>Total</span>
                        <span>R$6.000,00</span>
                    </div>
                    <div>
                        <span>Frete</span>
                        <span>Grátis</span>
                    </div>
                </Total>
                <CheckOut>
                    <div>
                        <span>Checkout</span>
                    </div>
                </CheckOut>
            </Bill>
            
        </ShopCart>
        </Page>
        );
}
const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > span {
        display: inline-block;
        color: #010035;
        font-family: 'Mark Pro', sans-serif;
        font-size: 35px;
        font-weight: bold;
        margin-left: 30px;
        margin-bottom: 80px;
    }
`;
const Top = styled.div`
    width: 100%;
    padding: 0px 30px;
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopLeft = styled.div`
    width: 37px;
    height: 37px;
    background-color: #010035;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
        font-size: 28px;
        color: #FFFFFF;
    }
`;

const TopRigth = styled.div`
    display: flex;
    align-items: center;
    span {
        color: #010035;
        font-family: 'Mark Pro', sans-serif;
        font-size: 15px;
        font-weight: bold;
        margin-right: 15px;
    }
    div {
        width: 37px;
        height: 37px;
        background-color: #FF6E4E;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ion-icon {
        color: #FFFFFF;
        font-size: 20px;
    }
`;
const ShopCart = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    flex-direction: column;
    background-color: #010035;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    color: #FFFFFF;
    font-family: 'Mark Pro', sans-serif;
`;

const Items = styled.div`
    width: 100%;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
`;

const Bill = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`;

const Total = styled.div`
    border-top: 2px solid rgb(64,64,104);
    border-bottom: 1px solid rgb(52,51,93);
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 60px;
        height: 40px;
        > span:nth-child(2) {
            font-weight: bold;
        }
    }

`;

const CheckOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;

    div {
        width: 326px;
        height: 54px;
        background-color: #FF6E4E;
        border-radius: 10px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
`;

