// imports:
import styled from "styled-components";
import Image1 from './assets/carousel1.png'

// component function:
export default function CarouselImage(){
    return(
        <CarouselImageWrapper 
        src={Image1} />
    )
}

// component styles:
const CarouselImageWrapper = styled.img`
    border: 1px solid red;
    width: 80%;

    position: relative;
    z-index: 1;
`