import {useEffect, useRef, useState} from 'react';
import {PokemonApi} from '../api/getPokemon';
import {Pokemons, Result, SimplePokemon} from '../interface/PokemonInterface';

export const usePokemonSearch = () => {
  const [isFetching,setIsFetching] = useState(true)
  const [listPokemon, setListPokemon] = useState<SimplePokemon[]>([]);
 

  const loadPokemons = async () => {
   
    const resp = await PokemonApi.get<Pokemons>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {

    const newPokemonList:SimplePokemon[] = pokemonList.map(({name,url},index) => {
      const urlPath = url.split('/')
      const id = urlPath[urlPath.length-2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      
      return{
        id,
        picture,
        name
      }
    });

    setListPokemon(newPokemonList)
    setIsFetching(false)
  };
  useEffect(() => {
    loadPokemons();
  }, []);


  return{
      listPokemon,
      isFetching,
  }
};
