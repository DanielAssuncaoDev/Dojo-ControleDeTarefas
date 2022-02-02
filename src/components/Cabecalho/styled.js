import styled from 'styled-components'

export const Container = styled.div`

    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: #3F3F3F;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);

    div{
        margin: 6px;
        font-weight: 400;
        color: #FFF;
        cursor: pointer;
    }
`