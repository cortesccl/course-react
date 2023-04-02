// rafc

import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./03-examples";


export const Layout = () => {

  const {counter, increment} = useCounter(0)
  const {data, isLoading, hasError} = useFetch(`https://api.gameofthronesquotes.xyz/v1/characters`)
  // console.log ({data})
  
  const { quotes, name, house } = !!data && data[counter];
  
  return (
    <>
      <h1>Game of Thrones</h1>
      <button 
        className="btn btn-primary" 
        onClick={() => increment(1) }
        disabled={isLoading}
        >
        Next Quote
      </button>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote quotes={quotes} house={house} name={name}/>
      }
          
      
    </>
  )
}
