import {create} from'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipeSlice } from './recipeSlice'
import { createFavoritesSlice, FavoritesSliceType, } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlices'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))

//Slice Pattern