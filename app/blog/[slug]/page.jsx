import React from 'react'
import Image from 'next/image'
import style from '@/app/blog/[slug]/pages.module.css'
import Link from 'next/link'
import Button from '@mui/material'



const page = () => {
    return (
        <div className={style.container}>
            <div className={style.imgcontainer}>
                <Image src='/puffed-pastry-with-tomatoes-683x1024.webp' fill
                 alt='' className={style.img} />

            </div>
        
            <div className={style.textcontainer}>
                <h1 className={style.title}>Title</h1>
                <div className={style.detail}>
                    <Image src='/puffed-pastry-with-tomatoes-683x1024.webp' 
                        alt='' className={style.detailimg} width={50} height={500} />
                    <div className={style.detailText}>
                        <span className={style.author}>Author</span>
                        <span className={style.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={style.detailText}>
                        <span className={style.detailTitle}>Published</span>
                        <span className={style.detailValue
                        }>01.01.2024</span>
                    </div>

                    



                </div>
                <div className={style.contect}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id vero, sint architecto minima vel rerum porro ducimus laborum recusandae?
                </div>
                <Link href ='/blog' className={style.link}> Go Back</Link>
            </div>
            


        </div>
    )
}

export default page
