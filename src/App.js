import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [loading,setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(url,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPokemons(res.data.results.map((p) => p.name))
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous) 
      setLoading(false) 
      
  })
  return () => cancel()
  },[url])

  function next(){
    
    console.log(nextUrl)
    setUrl(nextUrl)
    
  }
  
  function prev(){
    console.log(prevUrl)
    setUrl(prevUrl)
  }

  if(loading) return '...Loading'

  return (
    <>
       <PokemonList  pokemons = {pokemons} />
      <Pagination next={nextUrl ? next:null} prev={prevUrl? prev:null} />
      
    </>
  );
}

export default App;
