import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, name, house}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0,   height:  0})
  
  useLayoutEffect(() => {
    const { height, width} = pRef.current.getBoundingClientRect();    
    setBoxSize({width, height})
  }, [quote])

  return (
    <>    
      <blockquote 
        className="blockquote text-end"
        style={{display:'flex'}}
      >            
          {/* {
              quotes.map((quote, index) =>                  
                  <p ref={pRef} key={index} className="mb-1">{quote}</p>
              )
          } */}
          <p ref={pRef} className="mb-1">{quote}</p>
                
          <footer className="blockquote-footer"> {name} ({house.name})</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
