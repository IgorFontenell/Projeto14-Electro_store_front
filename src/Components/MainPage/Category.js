import styled from "styled-components"

export default function Category(ion) {
    
    return(
        <Classe>
            <div>
                <ion-icon name={ion.ion}></ion-icon>
            </div>
            
        </Classe>
    );
}
const Classe = styled.div`
    margin-right: 15px;
    
    div{
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #FF6E4E;
        align-items: center;
        justify-content: center;
        
    }
    ion-icon {
        font-size: 45px;
        color: #FFFFFF;
    }
`;