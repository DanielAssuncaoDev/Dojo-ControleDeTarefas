import {useNavigate} from 'react-router-dom'
import {UseAtividadeContext} from '../../context.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Container} from './styled'
import {ContainerAtividades} from '../../components/styled/ContainerAtividades'
import Cabecalho from '../../components/Cabecalho/index.js'

import Atividade from '../../components/Atividade'

export default function Home(){
    const nav = useNavigate()

    const {
        atividadeEstado: {titulo, atividades, idToUpdate},
        setTitulo,
        setAtividade,
        updateTitulo,
        setIdToUpdate
    } = UseAtividadeContext()

    
    const UpdadeOrCreate = () => {
        if (titulo){
            if (idToUpdate === undefined)
            OnCreateAtividade()
            else
                OnUpdateTitulo()
        }else{
            toast.error('Insira um titulo para sua atividade')
        }
    }

    const OnCreateAtividade = () => {    
        const id = atividades.length ?? 1
        setAtividade({
            id,
            titulo,
            concluido: false
        })

        setTitulo('')
    }

    const OnUpdateTitulo = () => {
        updateTitulo(titulo, idToUpdate)
        setIdToUpdate(undefined)
        setTitulo('')
        toast.success('Atividade Alterada com Sucesso')
    }

    const OnCancelUpdate = () => {
        setIdToUpdate(undefined)
        setTitulo('')
        toast.info('Alteração cancelada')
    }

    return(
        <div>
            <Cabecalho/>
            <Container>

                <h1 className='Titulo'>
                    Atividades
                </h1>

                <ContainerAtividades height='300px' width='700px' >
                    {
                        atividades.map( (item) => {
                            return <Atividade 
                                        titulo={item.titulo} 
                                        id={item.id}
                                        concluido={item.concluido}
                                        CanUpdateHere={true}
                                        limiteTitulo={60}
                                    />
                        } )
                    }
                </ContainerAtividades>

                <div className='ContainerCriarAtividade'>
                    <label> Titulo: </label>
                    <input onChange={ e => setTitulo(e.target.value) } value={titulo} />
                    
                    <div className='ContainerButtons' >
                        <button className='ButtonCreate'
                            onClick={UpdadeOrCreate} >
                            { idToUpdate === undefined ? 'Criar' : 'Alterar'  }
                        </button>

                        {
                            idToUpdate !== undefined
                                ? <button className='ButtonCancel'
                                     onClick={OnCancelUpdate} > 
                                    Cancelar 
                                 </button>
                                : ''
                        }
                    </div>
                    
                </div>
        </Container>
        <ToastContainer/>
        </div>
    )
}