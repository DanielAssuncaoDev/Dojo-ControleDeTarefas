import {useNavigate} from 'react-router-dom'
import {Container} from './styled'

export default function Cabecalho(){
    const navigate = useNavigate()
    return(
        <Container>
            <div onClick={() => navigate('/')} >
                Atividades
            </div>
            <div onClick={() => navigate('/controleAtividades')} >
                Controle de Atividades
            </div>
        </Container>
    )
}