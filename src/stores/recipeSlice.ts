import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeServices"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoritesSlice"



export type RecipesSliceType = {
    categories:Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilterSchema: SearchFilter) => Promise<void>
    selectRecipe: (id:Drink['idDrink']) => Promise<void>
    closeModal: () => void

}


export const createRecipeSlice : StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType>  = (set) => ({
    categories:{
        drinks:[ 

        ]
    },

    drinks:{
        drinks:[]
    },

    selectedRecipe:{} as Recipe, //Evitamos poner toda la estructura de el type,

    modal: false,

        fetchCategories:async () => {
            const categories = await getCategories()
            set({
                categories
            })
        },
        
        searchRecipes: async (filters) => {
            const drinks = await getRecipes(filters)
            set({
                drinks
            })
        },

        selectRecipe: async (id) => {
            const selectedRecipe = await getRecipeById(id)

            set({
                selectedRecipe,
                modal:true
            })
        },

        closeModal: () => {
            set({
                modal:false,
                selectedRecipe:{} as Recipe
            })
        }
})