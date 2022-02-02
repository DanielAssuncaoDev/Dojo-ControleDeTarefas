import style from 'styled-components'

export const ContainerAtividades = style.div`

    display: flex;
    flex-direction: column;
    background: #3F3F3F;
    box-shadow: 6px 4px 15px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    overflow-y: scroll;
    height: ${props => props.height };
    width:  ${props => props.width };
    padding: 1em;

`