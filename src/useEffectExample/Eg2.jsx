import React, { useEffect } from 'react'

export default function Eg2() {

    useEffect(() => {

        // if we want to redirect this site just open the page or UI update - we did this way

        // window.location.href = 'https://google.com'
        location.href = 'https://google.com'
    }, [])
    return (
        <div>Eg2</div>
    )
}
