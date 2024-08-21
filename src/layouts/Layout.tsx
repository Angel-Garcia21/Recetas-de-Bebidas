import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"
import Notification from "../components/Notifcation"


export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage )

  useEffect(() => {
    loadFromStorage()
  }, [])
  return (  
    <>
      <Header/>
    <main className="container mx-auto py-16 ">
      <Outlet/>
    </main>
    <Modal/>
    <Notification/>
    
    </>
  )
}
