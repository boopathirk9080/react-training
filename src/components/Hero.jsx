import React from 'react'
import { useState } from 'react'

export const Hero = () => {

    const [count, setCount] = useState(50)

function increment() {
 setCount(count + 1)
}
function decrement() {
setCount((count)=>{return count - 1})
setCount((count)=>{return count - 1})
setCount((count)=>{return count - 1})
}
    function hello() {
        const message = ['hello', 'world', 'memie']
        const randomindex = Math.floor(Math.random() * message.length)
        return message[randomindex]
    }
    return (
        <div>Hero
            <h1> {hello()}</h1>
<br />
<br />
            <button onClick={decrement}>-</button> <br /><br />
            <span>{count}</span><br /><br />
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Hero