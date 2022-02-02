import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AtividadeContextProvider from './context.js'

import Home from './Pages/home/index.js'
import ControleDeTarefas from './Pages/ControleDeAtividades/index.js' 

export default function Router(){
    return(
        <AtividadeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/controleAtividades' element={<ControleDeTarefas/>}/>
                </Routes>
            </BrowserRouter>
        </AtividadeContextProvider>
    )
}