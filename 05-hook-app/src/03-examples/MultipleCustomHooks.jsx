// rafc

import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(0)
  const {data, isLoading, hasError} = useFetch(`https://api.gameofthronesquotes.xyz/v1/characters`)
  
  const { quotes, name, house } = !!data && data[0];
  
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
          : <Quote quote={quotes[counter]} house={house} name={name}/>
      }
          
      
    </>
  )
}
