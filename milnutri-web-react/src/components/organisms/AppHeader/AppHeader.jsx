// imports:
import styled from 'styled-components'
import NutriciaContainer from '../../molecules/NutriciaContainer/NutriciaContainer'
import MilnutriMenu from '../../molecules/MilnutriMenuContainer/MilnutriMenu'

// component function:
export default function AppHeader(){
    return(
        <AppHeaderWrapper>
            <NutriciaContainer />
            <MilnutriMenu/>
        </AppHeaderWrapper>
    )
}

// component styles:
const AppHeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: 10px;
`