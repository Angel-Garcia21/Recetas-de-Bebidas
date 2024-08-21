import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { Link} from "react-router-dom"

export default function FavoritesPage() {


  const favorites = useAppStore((state) => state.favorites )

  const hasFavorites= useMemo(() => favorites.length, [favorites])
  return (
    <>
      <h1 className='text-6xl font-extrabold'>Favoritos</h1>

    {hasFavorites ? (
      <div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10 shadow-2xl'>
        {favorites.map(drink => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
          />
        ))}
      </div>
    ) :(
      <nav className="my-10 text-center tetx-2xl">
          <Link to='/' className="font-bold text-2xl hover:shadow-lg"> <span className="text-blue-600">Agrega</span> {''}tu primera receta a favoritos</Link>
      </nav>
      
    )}
    </>
  )
}
