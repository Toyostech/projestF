"use client"
// import React, { useEffect, useState } from 'react'
import style from '@/app/contact/contact.module.css'
import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import Hydration from '@/app/component/hydration_error/hydration'

//2.
// const HydrationtestNoSSR = dynamic(() => import("@/app/component/hydration_error/hydration"), {ssr: false})


function contactpage() {
  const [message, setmessage] = useState("");
 
  console.log(message)
  // hydration error /
  // 1.


  // const [Isclient, setIsclient]= useState(false)


 
  // useEffect(() => {
  //   setIsclient(true)
  // })
  



  const a = Math.random()
  console.log(a)

  





  return (
    <div className={style.container}>
      <div className={style.textconst}>
        <h1>Contact-Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure sunt sequi et optio labore magnam exercitationem quos aut quibusdam.</p>
        

      </div>
      <div className={style.formcontainer}>
        {/* {Isclient && a} */}
        {/* <HydrationtestNoSSR /> */}
        <div suppressHydrationWarning>
          {a}
        </div>
        <form>
          <input type="text" placeholder='Name andd Surname' value={ message} />
          <input type="email" placeholder='Email Address' />
          <input type="tell" placeholder='Phone Number' />
          <textarea name="
          " id="" cols="30" rows="10">

          </textarea>
          <button>Send</button>
        </form>

        
      </div>
    </div>
  )
}

export default contactpage