import style from 'styled-components'

export const Container = style.div`

    padding: 3px 8px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 5px;

    background: #FFFFFF;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    .Options{

        width: 65px;
        display: flex;

        button{
            border: none;
            border-radius: 5px;
            height: 30px;
            width: 30px;    
            margin: 2px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .ButtonEdit{
        background-color: #E4B613;
    }
    .ButtonDelete{
        background-color: #E41313;
    }

`