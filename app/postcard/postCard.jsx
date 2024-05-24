import React from 'react'
import style from '@/app/postcard/postCard.module.css'

import Link from 'next/link'
import Image from 'next/image'

const postCard = ({post}) => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.imageconst}>
                    <Image src='/aboutbg.jpg' alt='' fill className={style.img} />


                </div>
                <span className={style.date}>01-02-0224</span>


            </div>
            <div className={style.bottom}>
                <h1 className={style.title}>{post.title }</h1>
                <p className={style.descrip}>{post.body}</p>
                <Link href={ `/blog/${post.id}`}  className={style.link}>Read more</Link>

            </div>


        </div>
    )
}

export default postCard
