// imports:
import styled from 'styled-components'
import MilnutriLogo from '../../atoms/MilnutriLogo/MilnutriLogo'
import MenuButton from '../../atoms/MenuButton/MenuButton'

// component function:
export default function MilnutriMenu(){
    return(
        <MilnutriMenuWrapper>
            <MilnutriLogo />
            <MenuButton />
        </MilnutriMenuWrapper>
    )
}

// component styles:
const MilnutriMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;

    flex-shrink: 0;
    background-color: #C0F1FF;
`