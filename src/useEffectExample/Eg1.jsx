import React from 'react'

function Eg1() {

    const [count, setCount] = useState(0)

    //add 5
    useEffect(() => {
        setCount(count + 5)
    }, [])

    //greet 
    useEffect(() => {
        alert('Hello from react app')
    }, [])

    //message
    useEffect(() => {
        console.log('Hello');
    }, [])

    //name
    useEffect(() => {
        prompt('What is Your Name')
    })

    return (
        <div className='App'>
            <h1>Count : <span>{count}</span></h1>
        </div>
    )
}

export default Eg1