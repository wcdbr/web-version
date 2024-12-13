// imports:
import styled from 'styled-components';
import NutriciaLogoImg from './assets/nutricia-logo.png';

// component function:
export default function NutriciaLogo() {
    return(
        <NutriciaLogoWrapper src={NutriciaLogoImg}/>
    )
}

// component styles:
const NutriciaLogoWrapper = styled.img`
    height: 85px;
`;