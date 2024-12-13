// imports:
import styled from 'styled-components'
import ButtonImage from './assets/menu.png'

// component function:
export default function MenuButton(){
    function Teste(){
        alert('Botão foi clicado!')
    }


    return(
        <MenuButtonWrapper onClick={Teste}>
            <img src={ButtonImage} />
        </MenuButtonWrapper>
    )
}

// component styles:
const MenuButtonWrapper = styled.button`
    border: none;
    outline: none;
    background-color: transparent;

    &:hover{
        cursor: pointer;
        transition: all 0.4s;
        transform: scale(1.1);
    }

    & img{
        height: 45px;
    }
`