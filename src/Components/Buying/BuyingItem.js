import styled from "styled-components";

export default function BuyingItem() {
    return (
        <Item>
            <img src="https://i.zst.com.br/thumbs/45/d/32/785893320.jpg" alt="Item no carrinho" width="88" height="88" />
            <Center>
                <span>Galaxy Note 20 Ultra</span>
                <span>R$ 3.000,00</span>
            </Center>
            <Button>
                <ion-icon name="remove-outline"></ion-icon>
                <span>1</span>
                <ion-icon name="add-outline"></ion-icon>
            </Button>
        </Item>

    );
}
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background-color: #282843;
    min-width: 26px;
    height: 68px;
`;