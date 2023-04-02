import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./"

export const Memorize = () => {

    const {counter, increment} = useCounter(0)

    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Counter <Small value={counter}/></h1>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
