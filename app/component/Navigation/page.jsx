'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter()

    const clickHandler = (event) => {
        event.preventDefault()
        console.log('nice work')
        router.replace("/")
    }
    return (
        <div>
            <h1>gfchvbjbhjbn</h1>
            <Link href='/' prefetch={false}>check me out</Link>
            <button onClick={clickHandler}>click</button>

        </div>
    )
}

export default page
