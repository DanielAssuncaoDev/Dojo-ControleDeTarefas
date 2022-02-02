import style from 'styled-components'

export const Container = style.div`

    padding: 1em 4em;

    .Titulo{
        margin-bottom: 10px;
        font: 2.5em PT Sans;
    }

    .ContainerCriarAtividade{
        margin: 2em 0 2em;
        padding: 1.5em;
        border: 1px solid #505050;
        box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        width: 500px;

        label{
            margin-right: 2px;
        }

        input{
            width: 399px;
            height: 25px;
            padding: 8px;

            border: 1px solid #505050;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
        }

    }

    .ContainerButtons{
        margin-top: 10px;
        display: flex;
        justify-content: end;

        button{
            border: none;
            border-radius: 5px;
    
            height: 30px;
            width: 80px;
            margin: 4px;
            color: #FFF;
        }
    }

    .ButtonCreate{
        background-color: #469C38;
    }

    .ButtonCancel{
        background-color: #E41313;
    }

`


// $ git config --global user.name "DanielAssuncaoDev"
// $ git config --global user.email danielaristotelis@gmail.com