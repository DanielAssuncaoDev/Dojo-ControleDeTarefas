import {useNavigate} from 'react-router-dom'
import {UseAtividadeContext} from '../../context.js'
import {Container} from './styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Atividade(props){
    const navigate = useNavigate()

    const {
        setTitulo,
        excluirAtividade,
        updateSituacao,
        setIdToUpdate
    } = UseAtividadeContext()


    const OnAlterarAtividade = () => {
        setIdToUpdate(props.id)
        setTitulo(props.titulo)

        if (props.urlToUpdate){
            navigate(props.urlToUpdate)
        }
    }

    const OnExcluirAtividade = () => {
        excluirAtividade(props.id)
        toast.success('Atividade Excluida com Sucesso')
    }

    const OnAlterarSituacao = () => {
        if (props.concluido === true){
            updateSituacao(false, props.id)
        } else {
            updateSituacao(true, props.id)
        }
    }


    const TituloAtividade = () => {
        let titulo = props.titulo;
        if (titulo.length > props.limiteTitulo){
            titulo = titulo.substr(0, props.limiteTitulo) + '...'
        }
        
        return titulo
    }

    return(
        <div>
            <Container title={props.titulo}>
                <div className='InputsCheck'>
                    <input onClick={OnAlterarSituacao}
                        id={props.id} type='checkbox' checked={props.concluido} />
                    <label for={props.id} > <TituloAtividade /> </label>
                </div>
                
                <div className="Options">
                    <button className='ButtonEdit' 
                        onClick={OnAlterarAtividade} >
                        <img src='/assets/Images/edit_white_18dp.svg' alt='' />
                    </button>
                    <button className='ButtonDelete'
                        onClick={OnExcluirAtividade}>
                        <img src='/assets/Images/delete_outline_white_18dp.svg' alt='' />
                    </button>
                </div>
            </Container>
            <ToastContainer/>
        </div>
    )
}