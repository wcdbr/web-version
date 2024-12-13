// imports:
import styled from 'styled-components'
import NutriciaLogo from '../../atoms/NutriciaLogo/NutriciaLogo'

// component function:
export default function NutriciaContainer(){
    return(
        <NutriciaContainerWrapper>
            <NutriciaLogo />
        </NutriciaContainerWrapper>
    )
}

// component styles:
const NutriciaContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 90px;
    background-color: #DDF7FF;
`