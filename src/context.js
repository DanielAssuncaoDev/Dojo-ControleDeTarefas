import { createContext, useContext, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'setTitulo':{
            return {...state, titulo: action.titulo}
        }
        case 'setAtividade': 
            return {...state, atividades: [...state.atividades, action.atividade]}
        case 'updateSituacao':
            return {
                ...state,
                atividades: state.atividades.map( (item) => {
                    if ( item.id === action.id ){
                        return {...item, concluido: action.concluido}
                    } else {
                       return {...item}
                    }
                })
            }   
        case 'updateTitulo': {
            return {
                ...state,
                atividades: state.atividades.map( (item) => {
                    if ( item.id === action.id ){
                        return {...item, titulo: action.titulo}
                    } else {
                        return {...item}
                    }
                })
            }
        }
        case 'excluirAtividade': {
            return {
                ...state,
                atividades: 
                    state.atividades.filter( (item) => item.id !== action.id )
            }
        }
        case 'setIdToUpdate':
            return {...state, idToUpdate: action.id }

        default:
            return state;
    }
}

let estadoInicial = {
    id: 0,
    titulo: '',
    concluido: false,
    atividades: [],
    idToUpdate: undefined
}

const AtividadeContext = createContext()
export default function AtividadeContextProvider(props){
    const [atividadeEstado, setAtividadeEstado] = useReducer(reducer, estadoInicial)
    return(
        <AtividadeContext.Provider value={{atividadeEstado, setAtividadeEstado}}>
            {props.children}
        </AtividadeContext.Provider>
    )
}

export function UseAtividadeContext(){
    const context = useContext(AtividadeContext)
    const {atividadeEstado, setAtividadeEstado} = context

    return {
        atividadeEstado,
        setTitulo: (titulo) =>  setAtividadeEstado({type: 'setTitulo', titulo}),
        setAtividade: (atividade) => setAtividadeEstado({type: 'setAtividade', atividade}),
        setIdToUpdate: (id) => setAtividadeEstado({type: 'setIdToUpdate', id}),
        updateSituacao: (concluido, id) => setAtividadeEstado({type: 'updateSituacao', concluido, id}),
        updateTitulo: (titulo, id) => setAtividadeEstado({type: 'updateTitulo', titulo, id}),
        excluirAtividade: (id) =>  setAtividadeEstado({type: 'excluirAtividade', id})
    }
}