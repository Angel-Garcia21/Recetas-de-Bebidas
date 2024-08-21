import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { RecipesSliceType, createRecipeSlice } from './recipeSlice'


export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite:(recipe:Recipe) => void
    favoriteExists: (id:Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType,[], [], FavoritesSliceType > = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
    if(get().favoriteExists(recipe.idDrink)/*favorites.some(favorite => favorite.idDrink === recipe.idDrink)*/) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        }else{
            set((state) => ({
                favorites:[...state.favorites, recipe]
            }))
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