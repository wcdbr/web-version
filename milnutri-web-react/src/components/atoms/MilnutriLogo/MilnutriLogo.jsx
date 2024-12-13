// imports:
import styled from 'styled-components'
import MilnutriLogoImage from './assets/milnutri-logo-image.png'

// component function:
export default function MilnutriLogo(){
    return(
        <MilnutriLogoWrapper
            src={MilnutriLogoImage}
            alt='Milnutri Logo'
            />
    )
}

// component styles:
const MilnutriLogoWrapper = styled.img`
    height: 95px;
`