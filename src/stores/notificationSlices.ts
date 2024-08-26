import {StateCreator} from 'zustand'
import { FavoritesSliceType } from './favoritesSlice'

type Notification = {
    text:string
    error:boolean
    show:boolean
}

export type NotificationSliceType = {
    notification:Notification 
    showNotification:(payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}


export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType > = (set, get) => ({
    notification:{
        text:'',
        error:false,
        show:false
    },

    showNotification:(payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification()
        },5000);
    },

    hideNotification: () => {
        set({ notification: {
            text:'',
            error:false,
            show:false
            },

        })
    }
})