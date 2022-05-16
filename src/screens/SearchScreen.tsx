import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/UsePokemonSearch'
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'
import { SimplePokemon } from '../interface/PokemonInterface'

const SearchScreen = () => {

  const {isFetching,listPokemon} = usePokemonSearch()
  const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([])
  const [term,setTerm] = useState('')
  
  useEffect(()=>{
    if(term.length ===0){
      return setPokemonFilter([])
    }

    if(isNaN(Number(term))){
      setPokemonFilter(
      listPokemon.filter((list)=> list.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    )
    }else{
      const pokemonById = listPokemon.find((list)=>list.id=== term)
      setPokemonFilter(
        pokemonById ? [pokemonById] : []
      )
    }
    
    

  },[term])

  if(isFetching) return <Loading />


  return (
    <View style={{flex:1,marginHorizontal:20}}>
      <SearchInput 
        onDebounce={(value)=>setTerm(value)} 
      />

      <FlatList
          data={pokemonFilter}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          ListHeaderComponent={
            <View style={{marginHorizontal: 10,marginTop:50}}>
              <Text style={styles.title}>{term}</Text>
            </View>
          }
          renderItem={({item}) => {
            return <PokemonCard pokemon={item} />;
          }}
        />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
 
  pokeBola: {
    width: 170,
    height: 170,
    position: 'absolute',
  },
  title: {
    marginVertical: 25,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
})