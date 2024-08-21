import { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink:Drink
}
export default function DrinkCard({drink}: DrinkCardProps) {
    const selectRecipe= useAppStore((state) =>state.selectRecipe )
    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden p">
                <img src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`}
                className="hover:scale-125 transition:transform hover:rotate-3 h-80 w-full  mx-auto "
                />
            </div>
        
            <div className="text-center ">
                <h2 className='text-2xl truncate font-black'> {drink.strDrink}</h2>

                <button 
                onClick={() => selectRecipe(drink.idDrink)}
                className="bg-orange-500 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg ">
                    Ver Receta
                </button>
            </div>
        </div>
    )
    }
