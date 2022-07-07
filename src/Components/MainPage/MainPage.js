import styled from "styled-components";
import Category from "./Category";

export default function MainPage() {
    return(
        <Main>
            <Header>
                <div>
                    <h1>Select Category</h1>
                    <span>view all</span>
                </div>
                <Classes>
                    <Category ion="phone-portrait-outline" />
                    <Category ion="laptop-outline"/>
                    <Category ion="game-controller-outline"/>
                    <Category ion="headset-outline"/>
                    <Category ion="telescope-outline"/>
                    <Category ion="watch-outline"/>
                    <Category ion="print-outline"/>
                </Classes>
            </Header>
        </Main>
    );
};
const Main = styled.div`
    width:100%;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 15px;
`;
const Header = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid;
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
`
const Classes = styled.div`
    display: flex;
    align-items: center;
    overflow-x: scroll;
`