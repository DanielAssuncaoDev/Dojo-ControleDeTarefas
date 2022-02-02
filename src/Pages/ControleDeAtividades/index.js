import {useEffect} from 'react'
import {UseAtividadeContext} from '../../context.js'

import Atividade from '../../components/Atividade'
import Cabecalho from '../../components/Cabecalho/index.js'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {ContainerAtividades} from '../../components/styled/ContainerAtividades'
import {Container} from './styled'

export default function ControleDeTarefas(){
    const {
        atividadeEstado: {atividades},
    } = UseAtividadeContext()


    const FiltrarAtividades = (sitacaoAtividade) => {
        let atvsFiltradas = atividades.filter( item => item.concluido === sitacaoAtividade )
        atvsFiltradas = atvsFiltradas.map( item => {
            return <Atividade 
                        id={item.id}
                        titulo={item.titulo}
                        concluido={item.concluido}
                        urlToUpdate="/"
                        limiteTitulo={35}
                    />
        } )

        return atvsFiltradas
    }

    useEffect( () => {
        FiltrarAtividades(true)
        FiltrarAtividades(false)
    }, [atividades] )
    

    return(
        <div>
            <Cabecalho />
            <Container>
                <h1 className='Titulo'>
                    Controle De Atividades
                </h1>

                <div className='BoxTarefas' >
                    <div>
                        <h3 className='TituloBox' > 
                            Atividades Concluidas 
                        </h3>
                        <ContainerAtividades height='300px' width='500px' >
                            {FiltrarAtividades(true)}
                        </ContainerAtividades>
                    </div>
                    <div>
                        <h3 className='TituloBox'> 
                            Atividades Pendentes 
                        </h3>
                        <ContainerAtividades height='300px' width='500px' >
                            {FiltrarAtividades(false)}
                        </ContainerAtividades>
                    </div>
                </div>
            </Container>
            <ToastContainer/>
        </div>
    )
}