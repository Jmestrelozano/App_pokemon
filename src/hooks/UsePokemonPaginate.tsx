import {useEffect, useRef, useState} from 'react';
import {PokemonApi} from '../api/getPokemon';
import {Pokemons, Result, SimplePokemon} from '../interface/PokemonInterface';

export const UsePokemonPaginate = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [listPokemon, setListPokemon] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);

  const loadPokemons = async () => {
    setIsLoading(true)
    const resp = await PokemonApi.get<Pokemons>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;

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

    setListPokemon([...listPokemon,...newPokemonList])
    setIsLoading(false)
  };
  useEffect(() => {
    loadPokemons();
  }, []);


  return{
      listPokemon,
      isLoading,
      loadPokemons,
  }
};
