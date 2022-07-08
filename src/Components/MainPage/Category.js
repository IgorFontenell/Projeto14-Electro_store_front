import styled from "styled-components";
import { useState } from "react";

export default function Category({ ion, categoria }) {
    const [ selected, setSelected ] = useState(false);

    function Select(){
        setSelected(!selected);
    }
    
    return(
        <Classe  selected={selected} onClick={Select}>
            <div>
                <ion-icon name={ion}></ion-icon>
            </div>
            <span>{categoria}</span>
        </Classe>
    );
}
const Classe = styled.div`
    margin-right: 15px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: ${props => props.selected ? "#FF6E4E" : "#FFFFFF"};
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 3px grey;
        margin-bottom: 5px;
        
    }
    ion-icon {
        font-size: 45px;
        color: ${props => props.selected ? "#FFFFFF" : "#B3B3C3"};
    }
    span {
        font-family: 'Mark Pro', sans-serif;
        font-size: 12px;
        color: ${props => props.selected ? "#FF6E4E" : "#010035"};
    }
`;