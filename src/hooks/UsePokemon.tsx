import { useEffect, useState } from "react"
import { PokemonApi } from "../api/getPokemon"
import { Pokemon } from "../interface/PokemonInterface"

export const usePokemon =(id:string)=>{
    
    const [isLoading,setIsLoading] = useState(true)
    const [pokemon,setPokemon] = useState<Pokemon>({} as Pokemon)


    const loadPokemon =async( )=>{
        const respo  = await PokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(respo.data)
        setIsLoading(false)
    }

    useEffect(()=>{
        loadPokemon()
    },[])

    return{
        isLoading,
        pokemon
    }
}