import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { RecipesSliceType, createRecipeSlice } from './recipeSlice'
import { createNotificationSlice } from './notificationSlices'
import { NotificationSliceType } from './notificationSlices'


export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite:(recipe:Recipe) => void
    favoriteExists: (id:Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType > = (set, get, api) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)/*favorites.some(favorite => favorite.idDrink === recipe.idDrink)*/) {
                set((state) => ({
                    favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                }))
                    createNotificationSlice(set, get, api).showNotification({
                        text:'Se elimino de favoritos', 
                        error: false
                    })
            }else{
                set((state) => ({
                    favorites:[...state.favorites, recipe]
                }))
                

                createNotificationSlice(set, get, api).showNotification({
                    text:'Se agrego a favoritos', 
                    error: false
                })
            }
                createRecipeSlice(set,get,api).closeModal()
                //Meter una funcion de store en zustand
                localStorage.setItem('favorites', JSON.stringify(get().favorites))
            },

        favoriteExists:(id) => {
            return get().favorites.some(favorite => favorite.idDrink === id)
        },

        loadFromStorage: () => {
            const storedFavorites = localStorage.getItem('favorites')
            if(storedFavorites){
                set({
                    favorites: JSON.parse(storedFavorites)
                })
            }
        }
})