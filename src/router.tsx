import {BrowserRouter, Route, Routes} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Route element={<Layout/>}>
                <Routes>
                        <Route path='/' element ={<IndexPage/>}/>
                        <Route path='/favoritos' element ={<FavoritesPage/>}/>
                </Routes>
            </Route>
                
        </BrowserRouter>
    )
}
