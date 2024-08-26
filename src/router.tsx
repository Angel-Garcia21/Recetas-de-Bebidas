import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './layouts/Layout'
import { lazy, Suspense } from 'react'

//Performance
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>

                            <Route path='/' element ={
                                <Suspense fallback='Cargando...'>
                                    <IndexPage/>
                                </Suspense>
                            }/>

                            <Route path='/favoritos' element ={
                                <Suspense fallback='Cargando...'>
                                    <FavoritesPage/>
                                </Suspense>
                            }/>
                        </Route>
                </Routes>
        </BrowserRouter>
    )
}
