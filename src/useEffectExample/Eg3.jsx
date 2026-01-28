import React, { useEffect, useState } from 'react'

export default function Eg3() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])
    
    return (
        <>
            {
                show &&
                <div className='bg-violet-600 w-6/12 rounded py-3 px-6 flex gap-2 text-white mx-auto mt-12
                 animate__animated animate__pulse animate__infinite'
                >
                    <strong>Success !
                        <span> User invited Successfully</span>
                    </strong>
                </div>
            }
            <button className='bg-rose-600 px-8 py-2 text-white rounded mt-3 m-2 ' onClick={() => setShow(!show)}
                style={{
                    cursor: 'pointer'
                }}
            >Toggle</button>
        </>
    )
}