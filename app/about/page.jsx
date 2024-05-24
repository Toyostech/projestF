import React from 'react'
import style from "@/app/about/about.module.css"
import Image from "next/image"
import Navigation from '@/app/component/Navigation/page'



function Aboutpage() {
  return (
    <div className={style.imgcontainer}>
      <h1>ghhjf</h1>


      <Image src="/aboutbg.jpg" alt='iuuhb' fill />
      <div>
        <Navigation />
      </div>

    </div>
  )
}

export default Aboutpage
