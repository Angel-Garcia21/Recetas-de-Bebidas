import {StateCreator} from 'zustand'

type Notification = {
    text:string
    error:boolean
    show:boolean
}

export type NotificationSliceType = {
    notification:Notification 
    showNotification:()
}

export const createNotificationSlice: StateCreator<NotificationSliceType > = (set, get) => ({
    notification:{
        text:'',
        error:false,
        show:true
    }
})